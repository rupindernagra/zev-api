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

router.post('/add', [commonMiddleware], function (req, res) {

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

router.get('/all', [commonMiddleware], function (req, res) {

    SpaceModel.findAll(function(err, result) {
        if (err) {
            return res.status(500).send({ status: false, errors: err });
        }
        return res.send({ status: true, message: 'Get all Spaces', result: result });
    });
    
});

router.get('/:id', [commonMiddleware], function (req, res) {

    const { params: { spaceId } } = req;
    SpaceModel.findById(spaceId, function(err, result) {
        if (err) {
            return res.status(500).send({ status: false, errors: err });
        }
        return res.send({ status: true, message: 'Space is found', result: result });
    });
    
});

router.post('/my/all', [commonMiddleware], function (req, res) {

    const { body: { user_id } } = req;
    SpaceModel.mySpaces(user_id, function(err, result) {
        if (err) {
            return res.status(500).send({ status: false, errors: err });
        }
        return res.send({ status: true, message: 'Current User Spaces', result: result });
    });

});

router.post('/my/:spaceId', [commonMiddleware], function (req, res) {

    const { body: { user_id } } = req;
    const { params: { spaceId } } = req;
    SpaceModel.mySpaceById({userId: user_id, spaceId: spaceId}, function(err, result) {
        if (err) {
            return res.status(500).send({ status: false, errors: err });
        }
        return res.send({ status: true, message: 'Current User Space using ID', result: result });
    });
    
});

router.put('/update/views/:spaceId', [commonMiddleware], function (req, res) {

    const { params: { spaceId } } = req;
    SpaceModel.findById(spaceId, function(err, result) {
        if (err) { return res.status(500).send({ status: false, errors: err }); }
        else {
            let data = { spaceId: spaceId, views: result.views }
            SpaceModel.updateSpaceViews(data, function(err, result) {
                if (err) { return res.status(500).send({ status: false, errors: err }); }
                return res.send({ status: true, message: 'Space views updated' });
            });
        }
    })
    
});

module.exports = router;