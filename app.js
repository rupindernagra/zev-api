var express = require('express');
var app = express();
var db = require('./db');
var bodyParser = require('body-parser');
var multer = require('multer');

var rawBodySaver = function (req, res, buf, encoding) {
    if (buf && buf.length) {
        req.rawBody = buf.toString(encoding || 'utf8');
    }
}

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json({ verify: rawBodySaver }));
app.use(bodyParser.urlencoded({ verify: rawBodySaver, extended: true }));
//app.use(bodyParser.raw({ verify: rawBodySaver, type: '*/*' }));

var AuthController = require('./controllers/AuthController');
var RegisterController = require('./controllers/RegisterController');
var UserController = require('./controllers/UserController');
var SpaceController = require('./controllers/SpaceController');
var ApplicationsController = require('./controllers/ApplicationsController');
var SearchController = require('./controllers/SearchController');
var SendController = require('./controllers/SendController');

app.use('/api/auth', AuthController);
app.use('/api/register', RegisterController);
app.use('/api/users', UserController);
app.use('/api/space', SpaceController);
app.use('/api/application', ApplicationsController);
app.use('/api/search', SearchController);
app.use('/api/send', SendController);

// app.use("/api/Upload", function(req, res) {
    
// });

// default assets location
app.use(express.static(__dirname + '/assets'));

// Default route
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/home.html");
});

module.exports = app;