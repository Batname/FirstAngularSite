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
      yield mongo.feedbacks.insert(feedback);
      require("./../mailer/feedback_mailer").user(feedback);
      require("./../mailer/feedback_mailer").admin(feedback);
      this.status = 201;
      this.body = {
                  code: this.status, 
                  title: this.i18n.__('success_feedback_title'),
                  message: this.i18n.__('success_feedback_message'),
                  feedback:feedback
                  };
    } else {
      this.status = 400;
      if(!validityEmail){
        this.body = {
                     code: this.status, 
                     title: this.i18n.__('email_error_title'),
                     message: this.i18n.__('email_error_message')
                   };
      } else {
        this.body = {
                     code: this.status, 
                     title: this.i18n.__('validation_error_title'),
                     message: this.i18n.__('validation_error_message')
                    };
      };
    }
  } catch (err) {
    this.status = err.status || 500;
    this.body = {code: err.status, title: err.message};
  }
}