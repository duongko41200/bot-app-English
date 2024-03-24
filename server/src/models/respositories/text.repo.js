const { text, word, sentence } = require('../models/textform.model');

const findAllInfoText = async (query, limit, skip) => {
	return await text
		.find(query)
		.populate('topicId')
		.sort({ updateAt: -1 })
		.skip(skip)
		.limit(limit)
		.lean()
	
};

module.exports = {
	findAllInfoText,
};
