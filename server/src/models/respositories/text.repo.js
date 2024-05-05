'use strict';

const safetyCount = require('../../helpers/safetyCount');
const { text, word, sentence } = require('../../models/textform.model');
const TopicModel = require('../../models/topic.model');
const dayjs = require('dayjs');

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

const findListTextByFilter = async ({
	model,
	userId,
	limit,
	page,
	level,
	typeText,
	date,
}) => {
	const query = {};

	if (level != 'all') query['repeat'] = +level;
	if (typeText != 'all') query['typeText'] = typeText;

	const countPromise = model
		.find({
			userId,
			createdAt: {
				$gte: dayjs(`${date}-01`).startOf('day'),
				$lte: dayjs(`${date}-31`).startOf('day'),
			},
			...query,
		})
		.countDocuments();
	const resDataPromise = model
		.find({
			userId,
			createdAt: {
				$gte: dayjs(`${date}-01`).startOf('day'),
				$lte: dayjs(`${date}-31`).startOf('day'),
			},
			...query,
		})
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

const deleteText = async ({
	userId,
	textId,
	limit,
	page,
	level,
	date,
	typeText,
	model,
}) => {
	try {
		const textDeleted = await model.deleteMany({ _id: textId, userId });
		return await findListTextByFilter({
			model,
			userId,
			limit,
			page,
			level,
			typeText,
			date,
		});
	} catch (error) {
		console.log({ error });
		// return next(new AppError('No product found with that id', 404));
	}
};

const updateTextById = async ({
	userId,
	textId,
	typeText,
	textName,
	defind,
	attributes,
	topicId,
	model,
}) => {
	try {
		console.log({
			userId,
			textId,
			typeText,
			textName,
			defind,
			topicId,
			attributes,
			model,
		});
		const textUpdate = await model.findOneAndUpdate(
			{ _id: textId },
			{
				text: textName,
				defind,
				topicId,
				attributes,
			}
		);

		console.log({ textUpdate });
		return {
			contents: textUpdate,
		};
	} catch (error) {
		console.log({ error });
	}
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
	deleteText,
	updateTextById,
};
