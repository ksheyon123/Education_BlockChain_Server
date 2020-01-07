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

indexRouter.post('/api/introduction:/id', async (req, res) => {
    try {
        console.log(req.params);
        var mentorCode = req.params.id;
        var returnData = await mentorModel.getMentorData(mentorCode);
        res.status(200).send(returnData);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

//상담 전체 리스트 조회
indexRouter.get('/api/board/all', async (req, res) => {
    try {
        var returnData = await mentiModel.requestList();
        console.log(returnData);
        res.status(200).send(returnData);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

//상담 상세 내역 조회
indexRouter.post('/api/board/all:/id', async (req, res) => {
    try {
        
    } catch (err) {

    }
});

//상담 신청
indexRouter.post('/api/board/register', async (req, res) => {
    try {
        console.log(req.body);
        req.session.user.user
    } catch (err) {

    }
});

module.exports = indexRouter;