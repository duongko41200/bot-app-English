'use strict';

const safetyCount = require('../../helpers/safetyCount');
const { text, word, sentence } = require('../../models/textform.model');
const TopicModel = require('../../models/topic.model');

const findAllInfoText = async ({ model, query, limit, page }) => {
	const countPromise = safetyCount({ model: model, query });
	console.log({ query });
	const resDataPromise = text
		.find(query)
		.populate('topicId')
		.sort({ updatedAt: -1 })
		.skip((page - 1) * limit)
		.limit(limit)
		.lean();

	const [count, resData] = await Promise.all([
		countPromise,
		resDataPromise,
	]);

	return {
		total: count,
		// count: AllRecords.length,
		totalPages: Math.ceil(count / limit),
		currentPage: parseInt(page),
		contents: resData,
	};
};

const findListTextByFilter = async ({ model, query, limit, page }) => {
	const countPromise = safetyCount({ model: model, query });
	const resDataPromise = text
		.find(query)
		.populate('topicId')
		.sort({ updatedAt: -1 })
		.skip((page - 1) * limit)
		.limit(limit)
		.lean();

	const [count, resData] = await Promise.all([
		countPromise,
		resDataPromise,
	]);
	return {
		total: count,
		// count: AllRecords.length,
		totalPages: Math.ceil(count / limit),
		currentPage: parseInt(page),
		contents: resData,
	};
};
///TOPIC

const createTopic = async ({ name, userId }) => {
	return await TopicModel.create({ name: name, userId: userId });
};
const getAllTopc = async () => {
	return await TopicModel.find();
};

module.exports = {
	findAllInfoText,
	createTopic,
	getAllTopc,
	findListTextByFilter,
};
