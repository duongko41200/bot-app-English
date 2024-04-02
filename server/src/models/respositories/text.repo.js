'use strict';

const { text, word, sentence } = require('../../models/textform.model');
const TopicModel = require('../../models/topic.model');

const findAllInfoText = async (query, limit, skip) => {
	console.log('queryyy:', query.query);
	return await text
		.find(query.query)
		.populate('topicId')
		.sort({ updateAt: -1 })
		.skip(skip)
		.limit(limit)
		.lean();
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
	getAllTopc
};