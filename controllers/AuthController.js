var express = require('express');
var bodyParser = require('body-parser');

var User = require('../models/User');
var commonMiddleware = require('../helpers/commonMiddleware')
var router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var db = require('../db');


router.get('', [commonMiddleware], function (req, res) {
    
    db.query('SELECT * FROM wp_posts', (err,rows) => {
        if(err) throw err;
      
        return res.sendSuccess({ status: true, posts: rows });
      });
    
});

module.exports = router;