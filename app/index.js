var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var config = require('./../config/config');
var log = require('./../config/log')(module);
var port = process.env.PORT || 3000;

var app = express();

/**
 * Запуск статических файлов из папки public
 */
app.use(express.static(path.join(__dirname, "./../public")));

/**
 * Подключили роуты
 */
require("./../config/routers")(app);

/**
 * Запустили сервак
 */
app.server = app.listen(config.get("port"), function(){
    log.info('Express server listening on port ' + port);
});
