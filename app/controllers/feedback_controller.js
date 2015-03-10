var route = require('koa-route'),
    mongo = require('../../config/mongo'),
    _ = require('lodash');
    parse = require('co-body');


// register koa routes
exports.init = function (app) {
  app.use(route.post('/api/feedback', createFeedback));
};

/**
 * List configs.
 */
function *createFeedback() {
  try {
    var feedback = yield parse(this);
    if (!_.isUndefined(feedback.name) && !_.isUndefined(feedback.email) && !_.isUndefined(feedback.message)){
      this.status = 201;
      this.body = {success: "success"};
      yield mongo.feedbacks.insert(feedback);
      require("./../mailer/feedback_mailer").user(feedback);
      require("./../mailer/feedback_mailer").admin(feedback);
    } else {
      this.status = 400;
      this.body = {error: 'Validation error'};
    }
  } catch (err) {
    this.status = err.status || 500;
    this.body = err.message || 'Bad stuff happened!';
  }
}