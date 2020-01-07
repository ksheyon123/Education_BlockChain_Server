var express = require('express');
var mentorRouter = express.Router();

var mentorModel = require('../model/mentorModel');
var mentiModel = require('../model/mentiModel');

mentorRouter.post('/api/mentor/up', async (req, res) => {
    try {
        console.log(req.body)
        var getData = req.body
        await mentorModel.mentorUp(getData);
        res.status(200).send('hi');
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});


module.exports = mentorRouter;