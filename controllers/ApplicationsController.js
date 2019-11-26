var express = require('express');
var bodyParser = require('body-parser');
var commonMiddleware = require('../helpers/commonMiddleware')
var router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var ApplicationsModel = require('../models/ApplicationsModel')

router.post('/add', [commonMiddleware], function (req, res) {

    ApplicationsModel.saveApplication(req.body, function (err, result) {
        if (err) { return res.status(500).send({ status: false, errors: err }); }
        return res.send({ status: true, message: 'Application saved Successfully' });
    });

});

module.exports = router;