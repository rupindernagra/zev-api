var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var cors = require('cors');

var commonMiddleware = require('../helpers/commonMiddleware')
var router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.use(cors());
var SpaceModel = require('../models/SpaceModel');


// Upload the multiple images of Space
var storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "./assets/images/space");
    },
    filename: function(req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});

var upload = multer({ storage: storage }).array('file')

router.post('/upload', function(req, res) {
    
    upload(req, res, function (err) {
        
        if(req.file === 'undefined') {
            return res.status(500).send({ status: false, message: 'Sorry! Somethig went wrong.' });
        }
        else if (err instanceof multer.MulterError) {
            console.log('in instance', err);
            return res.status(500).json(err);
        } else if (err) {
            console.log('err', err);
            return res.status(500).json(err);
        }

        return res.status(200).send({ status: true, message: 'File uploaded sucessfully!', result: req.files });
    })

});

router.post('/add', [commonMiddleware], function (req, res) {

    SpaceModel.add_space(req.body, function (err, result) {
        if (err) { return res.status(500).send({ status: false, errors: err }); }
        return res.send({ status: true, message: 'Space Registered Successfully', result: { insertId: result.insertId } });
    });

});

router.get('/all', [commonMiddleware], function (req, res) {

    SpaceModel.findAll(function(err, result) {
        if (err) {
            return res.status(500).send({ status: false, errors: err });
        }
        return res.send({ status: true, message: 'Get all Spaces', result: result });
    });
    
});

router.get('/:spaceId', [commonMiddleware], function (req, res) {

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
            SpaceModel.getSpaceAndUpdateViews(data, function(err, response) {
                if (err) { return res.status(500).send({ status: false, errors: err }); }
                return res.send({ status: true, message: 'Space views updated', result: result });
            });
        }
    })
    
});

module.exports = router;