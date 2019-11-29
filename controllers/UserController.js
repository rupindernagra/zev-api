var express = require('express');
var bodyParser = require('body-parser');
var UserModel = require('../models/UserModel')
var commonMiddleware = require('../helpers/commonMiddleware')
var router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.get('/all', [commonMiddleware], function (req, res) {

    UserModel.getAllUsers(function (err, result) {
        if (err) { return res.status(500).send({ status: false, errors: err }); }
        return res.send({ status: true, message: 'All users data', result: result });
    });
  
});

router.get('/id/:userId', [commonMiddleware], function (req, res) {

    const { params: { userId } } = req;
    UserModel.getUserData(userId, function (err, result) {
        if (err) { return res.status(500).send({ status: false, errors: err }); }
        return res.send({ status: true, message: 'User exists', result: result });
    });
  
});


module.exports = router;