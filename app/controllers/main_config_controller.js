var mainConfig = require("./../models/main_config_model");


/**
 * Экшен на получение конфига
 */
exports.index = function (req, res) {
  res.send(mainConfig);
};