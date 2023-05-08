import axios from 'axios';

import { ALL_COURSES_ENDPOINT, BASE_URL } from './servicesConstants';

const getAllCourses = () =>
	axios.get(`${BASE_URL}${ALL_COURSES_ENDPOINT}`, getHeaders());

export { getAllCourses };

const getHeaders = () => {
	const token = window.localStorage.getItem('token');
	return {
		headers: {
			Authorization: token,
		},
	};
};
