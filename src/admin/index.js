/**
 * Makes all features available to outer modules.
 */

const express = require('express')
const router = express.Router();

router.use('/', require('./admin').Routes);
module.exports = {
    routes: [router]
};
