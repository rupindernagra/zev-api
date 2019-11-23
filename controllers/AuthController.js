var express = require('express');
var bodyParser = require('body-parser');
var AuthModel = require('../models/AuthModel')
var commonMiddleware = require('../helpers/commonMiddleware')
var router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.post('/login', [commonMiddleware], function (req, res) {

  AuthModel.login(req.body, function (err, result) {
      if (err) { return res.status(500).send({ status: false, errors: err }); }
      return res.send({ status: true, message: 'User successfully logged in!' });
  });
  
});

module.exports = router;