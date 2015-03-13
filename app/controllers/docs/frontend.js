var config = require('../../../config/config'),
    fs = require('fs'),
    path = require('path');

var readFileThunk = function(src) {
  return new Promise(function (resolve, reject) {
    fs.readFile(src, {'encoding': 'utf8'}, function (err, data) {
      if(err) return reject(err);
      resolve(data);
    });
  });
}

// register koa routes
exports.init = function (app) {

  var docsPath = path.join(process.cwd(), 'public/docs/');

  app.get("/docs/frontend", function *(next) {
    this.body = yield readFileThunk(docsPath + 'index.html');
  });

};

