import ApiService from './api.service';

const serviceURL = 'text';
const TextService = {
	//suy nghĩ xem gộp api của câu vào không
	createWord({ text, defind, topicId, typeText,attributes }) {
		return ApiService.post(
			`${serviceURL}/info/all`,
			{
				text: text,
				defind: defind,
				topicId: topicId,
				typeText: typeText,
				attributes:attributes
			},
			{
				'x-api-key': import.meta.env.APP_API_KEY,
				'x-client-id': localStorage.getItem('userId'),
				authorization: localStorage.getItem('accessToken'),
			}
		);
	},
	getAllText({page}) {
		return ApiService.get(
			`${serviceURL}/all`,

			{
				'x-api-key': import.meta.env.APP_API_KEY,
				'x-client-id': localStorage.getItem('userId'),
				authorization: localStorage.getItem('accessToken'),
			}, {
				page:page
			}
		);
	},
};

export default TextService;
