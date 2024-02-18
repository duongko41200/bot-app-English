'use strict';
const express = require('express');
const router = express.Router();
const AccessController = require('../../controllers/access.controller');
const { asyncHandle } = require('../../auth/checkAuth');
const {authentication, authenticationV2} = require('../../auth/authUtils')

router.post('/shop/signup', asyncHandle(AccessController.signUp));
router.post('/shop/login', asyncHandle(AccessController.login));

//Authen//
router.use(authenticationV2)

router.post('/shop/logout', asyncHandle(AccessController.logout));
router.post('/shop/handleRefreshToken', asyncHandle(AccessController.handleRefreshToken));

module.exports = router;
