var express = require('express');
var bodyParser = require('body-parser');
const config = require('./config');
var commonMiddleware = require('../helpers/commonMiddleware')
var router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
    // Gmail SMTP                   // Mailtrap - "fake SMTP server" for development.
    host: config.mailer.host,       // smtp.mailtrap.io
    port: config.mailer.port,       // 2525
    auth: {
       user: config.mailer.user,    // 3d2be9b3bdae14
       pass: config.mailer.pass     // 5096fc0a0bb61d
    }
});


// Send Mail to user
router.get('/mail', [commonMiddleware], function (req, res) {

    const message = {
        from: 'elonmusk@tesla.com', // Sender address
        to: 'sameer@squareloops.com',         // List of recipients
        subject: 'Design Your Model S | Tesla', // Subject line
        html: 'Have the most fun you can in a car. Get your Tesla today!' // Plain text body
    };
    transport.sendMail(message, function(err, info) {
        if (err) {
          console.log(err);
          return res.status(500).send({ status: false, errors: err });
        } else {
          console.log(info);
          return res.send({ status: true, message: 'Mail sent successfully', result: { info } });
        }
    });

});


module.exports = router;