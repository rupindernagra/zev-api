var express = require('express');
var bodyParser = require('body-parser');
var commonMiddleware = require('../helpers/commonMiddleware')
var router = express.Router();
var SendController = require('./SendController');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var ApplicationsModel = require('../models/ApplicationsModel')

router.post('/add', [commonMiddleware], function (req, res) {

    ApplicationsModel.saveApplication(req.body, function (err, result) {
        if (err) { return res.status(500).send({ status: false, errors: err }); }
        return res.send({ status: true, message: 'Application saved Successfully' });
    });

});

router.post('/my/all', [commonMiddleware], function (req, res) {

    const { body: { user_id } } = req;
    ApplicationsModel.getApplicants(user_id, function(err, result) {
        if (err) { return res.status(500).send({ status: false, errors: err }); }
        return res.send({ status: true, message: 'Applications for current user', result: result });
    });

});

router.post('/my/space/:spaceId', [commonMiddleware], function (req, res) {

    const { body: { user_id } } = req;
    const { params: { spaceId } } = req;
    ApplicationsModel.getApplicantBySpaceId({userId: user_id, spaceId: spaceId}, function(err, result) {
        if (err) { return res.status(500).send({ status: false, errors: err }); }
        return res.send({ status: true, message: `Application found with space id: ${spaceId}`, result: result });
    });

});

module.exports = router;