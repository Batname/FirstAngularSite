var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


var app = express();
app.use(express.static(path.join(__dirname, "./../public")));

app.get('*', function(req, res) {
    res.redirect('/#' + req.originalUrl);
});

app.server = app.listen(3000, function(){
    console.log('Express server listening on port 3000');
});
