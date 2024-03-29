'use strict';

const TextFormService = require('../services/textForm.service.js');
const { SuccessResponse } = require('../cores/success.response.js');

class TextFormController {
	createTextForm = async (req, res, next) => {
		console.log('data req:', req.user);

		new SuccessResponse({
			message: 'creat new textFrom success!',
			metadata: await TextFormService.createTextForm(
				req.body.typeText,
				{ ...req.body, userId: req.user.userId }
			),
		}).send(res);
	};

	//QUERY//
	/**
	 * @desc get all data word , sentence
	 * @param {Number} Limit 
	 * @param {Number} skip 
	 */
	getAllInfoText = async (req, res, next) => {

		new SuccessResponse({
			message: 'creat list textFrom success!',
			metadata: await TextFormService.findAllInfoText({
				userId: req.user.userId,
			}),
		}).send(res);
	};

	//END QUERY
}

module.exports = new TextFormController();
