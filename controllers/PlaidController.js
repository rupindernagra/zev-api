var express = require('express');
var bodyParser = require('body-parser');
var commonMiddleware = require('../helpers/commonMiddleware')
var router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var plaid = require('plaid');
const config = require('../config');

var APP_PORT = process.env.PORT || 3001;
var PLAID_CLIENT_ID = config.plaid.PLAID_CLIENT_ID;
var PLAID_SECRET = config.plaid.PLAID_SANDBOX_SECRET;
var PLAID_PUBLIC_KEY = config.plaid.PLAID_PUBLIC_KEY;
var PLAID_ENV = config.plaid.PLAID_ENV;

// We store the access_token in memory
// In production, store it in a secure persistent data store
var ACCESS_TOKEN = null;
var PUBLIC_TOKEN = null;
var ITEM_ID = null;

// Initialize the Plaid client
var client = new plaid.Client(
    PLAID_CLIENT_ID,
    PLAID_SECRET,
    PLAID_PUBLIC_KEY,
    plaid.environments[PLAID_ENV],
    { version: '2019-05-29' }
);

router.get('/', function (request, response, next) {
    return response.send({
        status: true,
        message: 'Return Plaid',
        result: {
            PLAID_PUBLIC_KEY: PLAID_PUBLIC_KEY,
            PLAID_ENV: PLAID_ENV,
        }
    });
});

router.post('/get_access_token', function (request, response, next) {
    PUBLIC_TOKEN = request.body.public_token;
    client.exchangePublicToken(PUBLIC_TOKEN, function (error, tokenResponse) {
        if (error != null) {
            var msg = 'Could not exchange public_token!';
            console.log(msg + '\n' + JSON.stringify(error));
            return response.json({
                error: msg
            });
        }
        response.json({
            tokenResponse: tokenResponse,
            error: false
        });
    });
});

// Retrieve ACH or EFT Auth data for an Item's accounts
// https://plaid.com/docs/#auth
router.get('/auth', function (request, response, next) {
    client.getAuth(ACCESS_TOKEN, function (error, authResponse) {
        if (error != null) {
            // prettyPrintResponse(error);
            return response.json({
                error: error,
            });
        }
        // prettyPrintResponse(authResponse);
        response.json({ error: null, auth: authResponse });
    });
});

module.exports = router;