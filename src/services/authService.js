import axios from 'axios';

import {
	BASE_URL,
	REGISTER_ENDPOINT,
	LOGIN_ENDPOINT,
	USER_ME_ENDPOINT,
	LOGOUT_ENDPOINT,
} from './servicesConstants';

const getHeaders = () => {
	const token = window.localStorage.getItem('token');
	return {
		headers: {
			Authorization: token,
		},
	};
};

// Users
const registerUserService = (data) =>
	axios.post(`${BASE_URL}${REGISTER_ENDPOINT}`, data);

const loginUserService = (data) =>
	axios.post(`${BASE_URL}${LOGIN_ENDPOINT}`, data);

const logoutUser = async () => {
	const response = await axios.delete(
		`${BASE_URL}${LOGOUT_ENDPOINT}`,
		getHeaders()
	);
	return response;
};

const getUserDetails = async () => {
	const response = await axios.get(
		`${BASE_URL}${USER_ME_ENDPOINT}`,
		getHeaders()
	);
	return response.data.result;
};

export { registerUserService, loginUserService, logoutUser, getUserDetails };
