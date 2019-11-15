var express = require('express');
var app = express();
var db = require('./db');
var bodyParser = require('body-parser');

//var UserController = require('./controllers/UserController');
//app.use('/users', UserController);
var rawBodySaver = function (req, res, buf, encoding) {
    if (buf && buf.length) {
        req.rawBody = buf.toString(encoding || 'utf8');
    }
}
app.use(bodyParser.json({ verify: rawBodySaver }));
app.use(bodyParser.urlencoded({ verify: rawBodySaver, extended: true }));
//app.use(bodyParser.raw({ verify: rawBodySaver, type: '*/*' }));

var AuthController = require('./controllers/AuthController');
var RegisterController = require('./controllers/RegisterController');
app.use('/api/auth', AuthController);
app.use('/api/register', RegisterController);

// default assets location
app.use(express.static(__dirname + '/assets'));

// Default route
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/home.html");
});

module.exports = app;