'use strict';

const { SuccessResponse } = require('../cores/success.response.js');
const { createTopic } = require('../models/respositories/text.repo.js');

class TopicController {
	createTopic = async (req, res, next) => {
		console.log('data req:', req.body);

		new SuccessResponse({
			message: 'creat new textFrom success!',
			metadata: await createTopic({
				name: req.body.name,
				userId: req.user.userId,
			}),
		}).send(res);
	};

	// //QUERY//
	// /**
	//  * @desc get all data word , sentence
	//  * @param {Number} Limit
	//  * @param {Number} skip
	//  */
	// getAllInfoText = async (req, res, next) => {

	// 	new SuccessResponse({
	// 		message: 'creat list textFrom success!',
	// 		metadata: await TextFormService.findAllInfoText({
	// 			userId: req.user.userId,
	// 		}),
	// 	}).send(res);
	// };

	//END QUERY
}

module.exports = new TopicController();
