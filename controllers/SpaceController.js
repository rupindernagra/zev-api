var express = require('express');
var bodyParser = require('body-parser');

var commonMiddleware = require('../helpers/commonMiddleware')
var router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var SpaceModel = require('../models/SpaceModel')

router.post('', [commonMiddleware], function (req, res) {

    // SpaceModel.checkUserExists(req.body.email, function (err, status) {
    //     if (err) { return res.status(500).send({ status: status, error: err }); }
    //     else {
            SpaceModel.add_space(req.body, function (err, result) {
                if (err) { return res.status(500).send({ status: false, errors: err }); }
                return res.send({ status: true, message: 'Space Registered Successfully' });
            });
    //     }
    // })
});

module.exports = router;