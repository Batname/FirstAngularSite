var topMenuCongig = require("./../models/top_menu_model");


var route = require('koa-route'),
    parse = require('co-body');


// register koa routes
exports.init = function (app) {
  app.use(route.get('/api/top_menu', getTopMenuCongig));
};

/**
 * List configs.
 */
function *getTopMenuCongig() {
  this.body = this.i18n.__('topMenu');
}