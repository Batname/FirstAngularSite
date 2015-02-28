/**
 * Подключение серверной конфигурации
 */
var nconf = require('nconf');
nconf.argv().env().file({file: "config.json"});

module.exports = nconf;