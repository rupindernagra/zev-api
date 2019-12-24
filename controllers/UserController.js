var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var cors = require('cors');
var UserModel = require('../models/UserModel')
var commonMiddleware = require('../helpers/commonMiddleware')
var router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.use(cors());


router.get('/all', [commonMiddleware], function (req, res) {

    UserModel.getAllUsers(function (err, result) {
        if (err) { return res.status(500).send({ status: false, errors: err }); }
        return res.send({ status: true, message: 'All users data', result: result });
    });
  
});

router.get('/id/:userId', [commonMiddleware], function (req, res) {

    const { params: { userId } } = req;
    UserModel.getUserInfo(userId, function (err, result) {
        if (err) { return res.status(500).send({ status: false, errors: err }); }
        return res.send({ status: true, message: 'User information', result: result });
    });

});

router.post('/profile', [commonMiddleware], function (req, res) {

    const { body: { userId } } = req;
    UserModel.getUserProfile(userId, function (err, result) {
        if (err) { return res.status(500).send({ status: false, errors: err }); }
        return res.send({ status: true, message: 'User profile information', result: result });
    });

});

// Upload avatar of user
var storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "./assets/images/avatar");
    },
    filename: function(req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});

var upload = multer({ storage: storage }).single('avatar')

router.post('/upload/:userId/avatar/', function(req, res) {
    
    const { params: { userId } } = req;
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

        UserModel.updateAvatar({userId, fileName: req.file.filename}, function (err, result) {
            if (err) { return res.status(500).send({ status: false, errors: err }); }
            return res.status(200).send({ status: true, message: 'Avatar updated sucessfully!', result: req.file });
        });
        
    })

});

router.put('/update/info/:userId', function(req, res) {

    const { params: { userId } } = req;
    UserModel.updateUserProfile({payload: req.body, userId}, function(err, result) {
        if (err) { return res.status(500).send({ status: false, errors: err }); }
        return res.send({ status: true, message: 'User information has been updated', result: result });
    });
    
});

router.put('/update/password/:userId', function(req, res) {

    const { params: { userId } } = req;
    UserModel.updatePassword({payload: req.body, userId}, function(err, result) {
        if (err) { return res.status(500).send({ status: false, errors: err }); }
        return res.send({ status: true, message: 'Password has been updated', result: result });
    });
    
});

module.exports = router;