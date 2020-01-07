var express = require('express');
var routes = express.Router();

const indexRouter = require('./index');
const mentorRouter = require('./mentor');
const mentiRouter = require('./menti');

routes.use(mentorRouter);
routes.use(mentiRouter);
routes.use(indexRouter);

module.exports = routes;