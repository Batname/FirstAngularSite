var nodemailer = require("nodemailer"),
    config = require("../../config/config"),
    fs = require("fs"),
    log = require('../../config/log')(module),
    sesTransport = require('nodemailer-ses-transport');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport(sesTransport({
    accessKeyId: "",
    secretAccessKey: "",
    rateLimit: 1
}));

module.exports.user = function (feedback) {

  var template = fs.readFileSync(__dirname + '/feedback.html').toString();

  // setup e-mail data with unicode symbols
  var mailOptions = {
      from: "NG-DEV.ME AngularJs Development ✔ " + config.app.email.email, 
      to: feedback.email, 
      subject: feedback.name + " your reference received", 
      html: template

  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          log.error(error);
      }else{
          log.info('Message sent: ' + JSON.stringify(info));
      }
  });
}

module.exports.admin = function (feedback) {

  // setup e-mail data with unicode symbols
  var mailOptions = {
      from: "AngularJs Admin ✔ " + config.app.email.email, 
      to: config.app.email.email, 
      subject: "New Message", 
      html: '<div>New Message</div>' + 
            '<div>' + feedback.name + "</div>" +
            '<div>' + feedback.email + "</div>" +
            '<div>' + feedback.message + "</div>" +
            "that all"

  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          log.error(error);
      }else{
          log.info('Message sent: ' + JSON.stringify(info));
      }
  });

}

