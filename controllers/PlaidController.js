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
var STRIPE_SCERET_KEY = 'sk_test_O3NnmXwAPLQNoEeys5zgb5wm00Hmlj6c1X';
const stripe = require('stripe')(STRIPE_SCERET_KEY);

// We store the access_token in memory
// In production, store it in a secure persistent data store
var ACCESS_TOKEN = null;
var PUBLIC_TOKEN = null;
var ITEM_ID = null;

// Account Id for bank details
var ACCOUNT_ID = null;

// Initialize the Plaid client
var client = new plaid.Client(
    PLAID_CLIENT_ID,
    PLAID_SECRET,
    PLAID_PUBLIC_KEY,
    plaid.environments.sandbox,
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
router.get('/auth/:access_token', function (request, response, next) {
    ACCESS_TOKEN = request.params.access_token;

    client.getAuth(ACCESS_TOKEN, function (error, authResponse) {
        if (error != null) {
            return response.json({
                error: error,
            });
        }
        response.json({ error: null, auth: authResponse });
    });
});

/**
 * START - Stripe APIs 
 */
router.post('/get_stripe_bank_token', function (request, response, next) {
    ACCESS_TOKEN = request.body.access_token
    ACCOUNT_ID = request.body.account_id;

    // Generate a bank account token
    client.createStripeToken(ACCESS_TOKEN, ACCOUNT_ID, function (err, res) {
        if (err != null) {
            var msg = 'Stripe bank token not found';
            console.log(msg + '\n' + JSON.stringify(err));
            return response.json({
                error: err,
                message: msg
            });
        }

        response.json({
            stripeToken: res,
            error: false
        });
    });
});

router.post('/stripe/payment', function (request, response, next) {
    const { access_token, account_id, meta } = request.body;
    ACCESS_TOKEN = access_token;
    ACCOUNT_ID = account_id;

    // Generate a bank account token
    client.createStripeToken(ACCESS_TOKEN, ACCOUNT_ID, function (err, res) {
        if (err != null) {
            var msg = 'Stripe bank token not found';
            console.log(msg + '\n' + JSON.stringify(err));
            return response.json({
                error: err,
                message: msg
            });
        }

        // Create a Customer
        stripe.customers.create({
            email: meta.email,
            description: `Charge for space - Item id: ${meta.plaid_item_id}`,
            source: res.stripe_bank_account_token,
        }, function (err, customer) {
            // called asynchronously
            if (err != null) {
                var msg = 'Can\'t fetch customer account';
                console.log(msg + '\n' + JSON.stringify(err));
                return response.json({
                    error: err,
                    message: msg
                });
            }

            // Verify customer and bank with two small deposits; if using stripe without Plaid
            // var data = { amounts: [32, 45] }
            // stripe.customers.verifySource(
            //     'cus_AFGbOSiITuJVDs',
            //     'ba_17SHwa2eZvKYlo2CUx7nphbZ',
            //     {
            //         amounts: [32, 45],
            //     },
            //     function (err, bankAccount) {
            //         // asynchronously called
            //     }
            // );

            // Create a charge on a verified bank account
            stripe.charges.create({
                amount: 1200,
                currency: 'usd',
                customer: customer.id,
                receipt_email: meta.email,
                metadata: meta
            }).then(charge => {
                // asynchronously called
                response.json({
                    charge: charge,
                    customer: customer,
                    error: false
                });
            }).catch(err => {
                var msg = 'Customer id is not match';
                console.log(msg + '\n' + JSON.stringify(err));
                return response.json({
                    error: err,
                    message: msg
                });
            });

        });
    });
});

router.get('/stripe/transaction/:pay_id', function (request, response, next) {
    const { pay_id } = request.params;

    stripe.charges.retrieve(pay_id, function (err, charge) {
        // asynchronously called
        if (err != null) {
            var msg = 'Payment/Charge id is incorrect';
            console.log(msg + '\n' + JSON.stringify(err));
            return response.json({
                error: err,
                message: msg
            });
        }

        response.json({
            charge: charge,
            error: false
        });
    });
});
/* End - Stripe APIs */


router.post('/transactions', function (request, response, next) {
    ACCESS_TOKEN = request.body.access_token
    const START_DATA = request.body.start_date;
    const END_DATA = request.body.end_date;
    const OPTIONS = {
        account_ids: null,
        count: 100,
        offset: 0
    }

    // Generate a bank account token
    client.getTransactions(ACCESS_TOKEN, START_DATA, END_DATA, OPTIONS, function (err, res) {
        if (err != null) {
            var msg = 'Transactions not found';
            console.log(msg + '\n' + JSON.stringify(error));
            return response.json({
                error: err,
                message: msg
            });
        }

        response.json({
            transactions: res.transactions,
            error: false
        });
    });
});

/**
 * Asset Report API - Plaid
 */
router.get('/asset_report/create', function (request, response, next) {
    ACCESS_TOKENS = ['access-sandbox-a05c7b86-edf1-440d-8ffe-f73c8e082efc'];
    // ACCESS_TOKEN = request.body.access_token
    const daysRequested = 60;
    const options = {
        client_report_id: '123',    // space id
        webhook: 'http://localhost:3000',
        user: {
            client_user_id: '789',
            first_name: 'Jane',
            middle_name: 'Leah',
            last_name: 'Doe',
            ssn: '123-45-6789',
            phone_number: '(555) 123-4567',
            email: 'jane.doe@example.com',
        },
    };

    // ACCESS_TOKENS is an array of Item access tokens.
    // Note that the assets product must be enabled for all Items.
    // All fields on the options object are optional.
    client.createAssetReport(ACCESS_TOKENS, daysRequested, options, (error, createResponse) => {
        if (error != null) {
            // Handle error.
            var msg = 'Error in Asset Report';
            console.log(msg + '\n' + JSON.stringify(error));
            return response.json({
                error: error,
                message: msg
            });
        }

        const assetReportId = createResponse.asset_report_id;
        const assetReportToken = createResponse.asset_report_token;
        response.json({
            result: createResponse,
            error: false
        });
    });

});


// ASSET_REPORT_TOKEN is the token from the createAssetReport response.
router.get('/asset_report/get', function (request, response, next) {
    const ASSET_REPORT_TOKEN = 'assets-sandbox-34e35ef5-48f6-4692-b65f-b3baf368aeed';
    // client.getAssetReport(ASSET_REPORT_TOKEN, false, (error, getResponse) => {
    //     if (error != null) {
    //         if (error.status_code === 400 &&
    //             error.error_code === 'PRODUCT_NOT_READY') {
    //             // Asset report is not ready yet. Try again later.
    //         } else {
    //             // Handle error.
    //         }
    //     }

    //     const report = getResponse.report;
    //     console.log('report:', getResponse);
    //     response.json({
    //         result: getResponse.report,
    //         error: false
    //     });
    // });

    client.getAssetReportPdf(ASSET_REPORT_TOKEN, (error, pdfResponse) => {
        if (error != null) {
            // Handle error.
        }

        // The PDF is binary data.
        const pdf = pdfResponse;
        console.log('pdf', pdfResponse);
        response.json({
            result: pdfResponse,
            error: false
        });
    });
});

module.exports = router;