var express = require('express');
var bodyParser = require('body-parser');

var User = require('../models/User');
var commonMiddleware = require('../helpers/commonMiddleware')
var router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var RegisteredModel = require('../models/RegisterModel')

router.post('', [commonMiddleware], function (req, res) {

    RegisteredModel.checkUserExists(req.body.email, function (err, status) {
        if (err) { return res.status(500).send({ status: status, error: err }); }
        else {
            RegisteredModel.register(req.body, function (err, result) {
                if (err) { return res.status(500).send({ status: false, errors: err }); }
                return res.send({ status: true, message: 'User Registered Successfully' });
            });
        }
    })
});

module.exports = router;