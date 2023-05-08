import axios from 'axios';

import {
	BASE_URL,
	REGISTER_ENDPOINT,
	LOGIN_ENDPOINT,
} from './servicesConstants';

// Users
const registerUserService = (data) =>
	axios.post(`${BASE_URL}${REGISTER_ENDPOINT}`, data);
const loginUserService = (data) =>
	axios.post(`${BASE_URL}${LOGIN_ENDPOINT}`, data);

export { registerUserService, loginUserService };
