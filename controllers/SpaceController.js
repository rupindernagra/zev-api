var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');

var commonMiddleware = require('../helpers/commonMiddleware')
var router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var SpaceModel = require('../models/SpaceModel')

// var Storage = multer.diskStorage({
//     destination: function(req, file, callback) {
//         callback(null, "./Images");
//     },
//     filename: function(req, file, callback) {
//         callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
//     }
// });

router.get('', [commonMiddleware], function (req, res) {

    SpaceModel.get_spaces(function(err, result) {
        if (err) {
            return res.status(500).send({ status: false, errors: err });
        }
        return res.send({ status: true, message: 'Get all Spaces', results: result });
    });
    
});

router.post('', [commonMiddleware], function (req, res) {

    SpaceModel.add_space(req.body, function (err, result) {
        if (err) { return res.status(500).send({ status: false, errors: err }); }
        return res.send({ status: true, message: 'Space Registered Successfully' });
    });
    // SpaceModel.upload(req.body.image_url, res, function(err) {
    //     if (err) {
    //         return res.end("Something went wrong!");
    //     }
    //     return res.end("File uploaded sucessfully!.");
    // });
});

module.exports = router;