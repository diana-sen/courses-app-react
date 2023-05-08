import axios from 'axios';

import { ALL_AUTHORS_ENDPOINT, BASE_URL } from './servicesConstants';

const getAllAuthors = () =>
	axios.get(`${BASE_URL}${ALL_AUTHORS_ENDPOINT}`, getHeaders());

export { getAllAuthors };

const getHeaders = () => {
	const token = window.localStorage.getItem('token');
	return {
		headers: {
			Authorization: token,
		},
	};
};
