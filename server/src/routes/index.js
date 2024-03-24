'use strict';
const express = require('express');
const { apiKey, permission } = require('../auth/checkAuth');
const router = express.Router();

//check apiKey midderware
router.use(apiKey);

//check permission
router.unsubscribe(permission('000'));

router.use('/v1/api', require('./access'));
router.use('/v1/api/text', require('./textForm'));

module.exports = router;
