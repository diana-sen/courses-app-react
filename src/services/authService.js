import axios from 'axios';

import {
	BASE_URL,
	REGISTER_ENDPOINT,
	LOGIN_ENDPOINT,
	USER_ME_ENDPOINT,
} from './servicesConstants';

// Users
const registerUserService = (data) =>
	axios.post(`${BASE_URL}${REGISTER_ENDPOINT}`, data);

const loginUserService = (data) =>
	axios.post(`${BASE_URL}${LOGIN_ENDPOINT}`, data);

const getUserDetails = async () => {
	const response = await axios.get(
		`${BASE_URL}${USER_ME_ENDPOINT}`,
		getHeaders()
	);
	return response.data.result;
};

export { registerUserService, loginUserService, getUserDetails };

const getHeaders = () => {
	const token = window.localStorage.getItem('token');
	return {
		headers: {
			Authorization: token,
		},
	};
};
