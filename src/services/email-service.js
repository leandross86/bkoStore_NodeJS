'use strict';
let config = require('../config');
let sendgrid = require('sendgrid')(config.sendgridKey);


exports.send = async (to, subject, body) => {
    sendgrid.send({
        to: to,
        from: 'leandrossss@hotmail.com',
        subject: subject,
        html: body
    })
}

