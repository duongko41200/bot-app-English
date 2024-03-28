'use strict';
const express = require('express');
const router = express.Router();
const TopicController = require('../../controllers/topic.controller')
const { asyncHandle } = require('../../auth/checkAuth');
const {
	authentication,
	authenticationV2,
} = require('../../auth/authUtils');

//Authen//
router.use(authenticationV2);

router.post(
	'/create',
	asyncHandle(TopicController.createTopic)
);

// QUERY
// router.get('', asyncHandle(TextFormController.getAllInfoText));

module.exports = router;
