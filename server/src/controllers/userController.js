'use strict';

const { SuccessResponse } = require('../cores/success.response.js');
const {
	createTopic,
	getAllTopc,
} = require('../models/respositories/text.repo.js');
const { getAllWithQuery } = require('../services/user.service.js');

class UserController {
	createTopic = async (req, res, next) => {
		new SuccessResponse({
			message: 'creat new textFrom success!',
			metadata: await createTopic({
				name: req.body.name,
				userId: req.user.userId,
			}),
		}).send(res);
	};

	// //QUERY//

	getAllWithQuery = async (req, res, next) => {
		const params = req.query;

		console.log({ params });

		// let { filter, range, sort } = params;

		// console.log({ filter, range, sort });

		const filter = JSON.parse(params.filter);

		const range = JSON.parse(params.range);

		const sort = JSON.parse(params.sort);

		new SuccessResponse({
			message: 'creat new textFrom success!',
			metadata: await getAllWithQuery({ filter, range, sort }),
		}).send(res);
	};
	//END QUERY
}

module.exports = new UserController();
