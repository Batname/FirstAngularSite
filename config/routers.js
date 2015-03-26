var fs = require('fs'),
    logger = require('koa-logger'),
    send = require('koa-send'),
    cors = require('koa-cors'),
    jade = require('koa-jade'),
    config = require('./config'),
    render = require('koa-render'),
    path = require('path'),
    router = require("koa-router")
    locale = require('koa-locale'),
    i18n = require('koa-i18n');  


module.exports = function (app) {

  locale(app);

  /**
   *  Define server localisation
   */

  app.use(i18n(app, {
   directory: './config/locales',
   locales: ['sp', 'en'],
   modes: [
     'query'               //  optional detect querystring - `/?locale=en-US` 
   ]
  }));

  if (config.app.env !== 'test') {
    app.use(logger());
  }

  var viewPath = path.join(process.cwd(), 'views');

  /** 
   * Use middleware cors
   */
  app.use(cors({
    maxAge: config.app.cacheTime / 1000,
    credentials: true,
    methods: 'GET, HEAD, OPTIONS, PUT, POST, DELETE',
    headers: 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  }));

 /** 
  * Use middleware jade
  */
  app.use(jade.middleware({
    viewPath: viewPath,
    debug: true,
  }))

  /** 
   * Use middleware router
   */
  app.use(router(app));

  /** 
   * serve the static files in the /client directory, use caching only in production (7 days)
   */
  var sendOpts = config.app.env === 'production' ? {root: 'public', maxage: config.app.cacheTime} : {root: 'public'};
  app.use(function *(next) {

    /**
     * do not handle /api paths
     */
    if (this.path.substr(0, 5).toLowerCase() === '/api/') {

      /**
       * handle path
       */
      yield next;
      return;

    } else if (yield send(this, this.path, sendOpts)) {

      /**
       * file exists and request successfully served so do nothing
       */
      return;

    } else if (this.path.indexOf('.') !== -1) {

        /** file does not exist so do nothing and koa will return 404 by default
        * we treat any path with a dot '.' in it as a request for a file
        */
        this.redirect('/');
        this.status = 301;
      return;
    } else {

    /**
     *  request is for a subdirectory so treat 
     *  it as an angular route and serve index.html, 
     *  letting angular handle the routing properly
     *  yield send(this, '/index.html', sendOpts);
     */
      yield this.render('/index.jade', {
        env: config.app.env
      })

    }
  });

  /**
   * get documentations in development 
   */
  if (config.app.env !== 'production') {
    require('../app/controllers/docs/frontend').init(app);
  }

  /**
   * mount all the routes defined in the api controllers
   */
  require('../app/controllers/main_config_controller.js').init(app);
  require('../app/controllers/feedback_controller.js').init(app);
  require('../app/controllers/top_menu_controller.js').init(app);

  /**
   * Error Handling
   */
  require("../app/controllers/error_handling.js").init(app);

}    
