var express = require('express');
var indexRouter = express.Router();

var mentorModel = require('../model/mentorModel');
var mentiModel = require('../model/mentiModel');

indexRouter.get('/api/introduction', async (req, res) => {
    try {
        var returnData = await mentorModel.getAllMentor();
        console.log(returnData);
        res.status(200).send(returnData);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

module.exports = indexRouter;