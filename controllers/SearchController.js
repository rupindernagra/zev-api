var express = require('express');
var bodyParser = require('body-parser');
var commonMiddleware = require('../helpers/commonMiddleware')
var router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var SearchModel = require('../models/SearchModel')


router.post('/spaces', [commonMiddleware], function (req, res) {

    const { body: { user_id, term } } = req;
    SearchModel.searchSpaces({userId: user_id, term}, function(err, result) {
        if (err) { return res.status(500).send({ status: false, errors: err }); }
        return res.send({ status: true, message: 'Search result for Spaces', result: result });
    });
    
});

module.exports = router;