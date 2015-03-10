var co = require('co'),
    koa = require('koa'),
    config = require('./../config/config'),
    mongo = require('./../config/mongo'),
    log = require('./../config/log')(module),
    app = koa();


module.exports = app;

/**
 * Обвертка для запуска сервера и базы данных.
 */
app.init = co.wrap(function *() {

  yield mongo.connect();

  require("./../config/routers")(app);

  app.server = app.listen(config.app.port);

  if (config.app.env !== 'test') {
    log.info('Server listening on port ' + config.app.port);
  }

})    

/**
 * Проверка на главный файл.
 */
if (!module.parent) {
  app.init().catch(function (err) {
    console.error(err.stack);
    process.exit(1);
  });
}