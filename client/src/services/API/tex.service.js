import ApiService from './api.service';

const serviceURL = 'text';
const TextService = {
	//suy nghĩ xem gộp api của câu vào không
	createWord({ text, defind, topicId, typeText }) {
		return ApiService.post(
			`${serviceURL}/info/all`,
			{
				text: text,
				defind: defind,
				topicId: topicId,
				typeText: typeText,
			},
			{
				'x-api-key': import.meta.env.APP_API_KEY,
				'x-client-id': localStorage.getItem('userId'),
				authorization: localStorage.getItem('accessToken'),
			}
		);
	},
	getAllText() {
		return ApiService.get(
			`${serviceURL}/all`,

			{
				'x-api-key': import.meta.env.APP_API_KEY,
				'x-client-id': localStorage.getItem('userId'),
				authorization: localStorage.getItem('accessToken'),
			},{}
		);
	},
};

export default TextService;
