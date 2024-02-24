import ApiService from './api.service';

const serviceURL = 'access';
const AccessService = {
	login({ emailOrUsername, password }) {
		return ApiService.post(
			`${serviceURL}/login`,
			{
				emailOrUsername: emailOrUsername,
				password: password,
			},
			{
				'x-api-key': import.meta.env.APP_API_KEY,
			}
		);
	},

	logout() {
		return ApiService.post(
			`${serviceURL}/logout`,
			{},
			{
				'x-api-key': import.meta.env.APP_API_KEY,
				'x-client-id': window.sessionStorage.getItem('userId'),
				authorization: window.sessionStorage.getItem('accessToken'),
			}
		);
	},
	signUp({name, email, password }) {
		return ApiService.post(
			`${serviceURL}/signup`,
			{
				name: name,
				email:email,
				password: password,
			},
			{
				'x-api-key': import.meta.env.APP_API_KEY,
			}
		);
	},
};

export default AccessService;
