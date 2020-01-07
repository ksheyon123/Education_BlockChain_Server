var express = require('express');
var app = express();
// var path = require('path');
// var static = require('static-serve');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var mainRouter = require('./routes/routes');

app.use(mainRouter);

app.listen(3000, '192.168.0.227', () => {
    console.log('http://192.168.0.227:3000');
});

