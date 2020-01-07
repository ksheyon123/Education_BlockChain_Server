var express = require('express');
var routes = express.Router();

const route_1 = require('./route_1');

routes.use(route_1);

module.exports = routes;