var route = require('koa-route'),
    mongo = require('../../config/mongo'),
    _ = require('lodash'),
    feedbackHelpers = require("../helpers/feedback_helpers"),
    parse = require('co-body');


// register koa router
exports.init = function (app) {
  app.use(route.post('/api/feedback', createFeedback));
};

/**
 * List configs.
 */
function *createFeedback() {
  try {
    var feedback = yield parse(this);
    var validityKeys = feedbackHelpers.validateKeysAvailability(["name", "email", "message"], feedback);
    var validityValues = feedbackHelpers.validateFilling(feedback);
    var validityEmail = feedbackHelpers.validateEmail(feedback.email);
    if (validityKeys && validityValues && validityEmail){
      this.status = 201;
      this.body = {code: this.status, status: "success", feedback:feedback};
      yield mongo.feedbacks.insert(feedback);
      require("./../mailer/feedback_mailer").user(feedback);
      require("./../mailer/feedback_mailer").admin(feedback);
    } else {
      this.status = 400;
      this.body = {code: this.status, message: 'Validation error'};
    }
  } catch (err) {
    this.status = err.status || 500;
    this.body = {code: err.status, message: err.message};
  }
}