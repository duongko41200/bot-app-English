'use strict';

const TextFormService = require('../services/textForm.service.js');
const { SuccessResponse } = require('../cores/success.response.js');

class TextFormController {
	createTextForm = async (req, res, next) => {
		console.log('data req:', req.body);

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
				page: req.query.page,
				limit: req.query.limit,
			}),
		}).send(res);
	};

	getListTextByFilter = async (req, res, next) => {
		new SuccessResponse({
			message: 'creat list textFrom success!',
			metadata: await TextFormService.findListTextByFilter({
				userId: req.user.userId,
				page: req.query.page,
				limit: req.query.limit,
				level: req.query.level,
				date: req.query.date,
				typeText: req.query.typeText,
			}),
		}).send(res);
	};

	deleteText = async (req, res, next) => {
		console.log("request:",req.query)
		new SuccessResponse({
			message: 'delete textFrom success!',
			metadata: await TextFormService.deleteText({
				userId: req.user.userId,
				textId: req.query.textId,
				page: req.query.page,
				limit: req.query.limit,
				level: req.query.level,
				date: req.query.date,
				typeText: req.query.typeText,
			}),
		}).send(res);
	};

	updateTextbyId= async (req, res, next) => {
		console.log("request:::",req.body)
		new SuccessResponse({
			message: 'update text success!',
			metadata: await TextFormService.updateTextbyId({
				userId: req.user.userId,
				textId: req.body.textId,
				textName: req.body.text,
				defind:req.body.defind,
				typeText: req.body.typeText,
				attributes:req.body.attributes,
				topicId: req.body.topicId,
				
			}),
		}).send(res);
	};

	//END QUERY
}

module.exports = new TextFormController();
