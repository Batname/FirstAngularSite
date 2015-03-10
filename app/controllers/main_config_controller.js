var mainConfig = require("./../models/main_config_model");


var route = require('koa-route'),
    parse = require('co-body');


// register koa routes
exports.init = function (app) {
  app.use(route.get('/api/main_config', listCongigs));
};

/**
 * List configs.
 */
function *listCongigs() {
  var configs = yield mainConfig
  this.body = configs;
}