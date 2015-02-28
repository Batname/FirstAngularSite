var feedback = require("./../app/controllers/feedback_controller");
var main_config = require("./../app/controllers/main_config_controller");


/**
 * Экспортирование роутов
 */
module.exports = function (app) {
  app.post("/feedback", feedback.create);
  app.get("/main_config", main_config.index);

  app.get('*', function(req, res) {
    res.redirect('/#' + req.originalUrl);
  });

}