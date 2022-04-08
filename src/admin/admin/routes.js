'use strict';

// npm modules
const express = require('express')

// router
const router = express.Router();

// local modules
const controller = require('./controller')

router.get('/get_users_and_group_data', controller.get_users_and_group_data);

module.exports = router;
