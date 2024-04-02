'use strict';
const express = require('express');
const router = express.Router();
const TextFormController = require('../../controllers/textForm.controller');
const { asyncHandle } = require('../../auth/checkAuth');
const {
	authentication,
	authenticationV2,
} = require('../../auth/authUtils');

//Authen//
router.use(authenticationV2);

router.post(
	'/info/all',
	asyncHandle(TextFormController.createTextForm)
);

// QUERY
router.get('/all', asyncHandle(TextFormController.getAllInfoText));

module.exports = router;