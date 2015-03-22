var config = require('../../config/config');

module.exports.init = function (app) {
  // Error propagation.
  app.use(function *(next) {
    try {
      yield next;
    } catch (err) {
      err.status = err.status || 500;
      err.message = err.expose ? err.message : 'Kaboom!';

      // Set our response.
      this.status = err.status;
      this.body = {code: err.status, message: err.message};
      this.app.emit('error', err, this);

      if (config.app.env === 'production' && err.status == 404) {
        this.redirect('/');
      };

    }
  });

  // 404 handling.
  app.use(function *(next) {
    yield next;
    var body = this.body;
    var status = this.status || 404;
    var noContent = ~[204, 205, 304].indexOf(status);

    // ignore body
    if (noContent) return;

    // status body
    if (null == body) {
      this.throw(status);
    }
  });
}