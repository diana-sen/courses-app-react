import axios from 'axios';

import {
	ALL_COURSES_ENDPOINT,
	BASE_URL,
	SAVE_NEW_COURSE_ENDPOINT,
} from './servicesConstants';

const getHeaders = () => {
	const token = window.localStorage.getItem('token');
	return {
		headers: {
			Authorization: token,
		},
	};
};

const getAllCourses = () =>
	axios.get(`${BASE_URL}${ALL_COURSES_ENDPOINT}`, getHeaders());

const saveNewCourse = async (course) => {
	const response = await axios.post(
		`${BASE_URL}${SAVE_NEW_COURSE_ENDPOINT}`,
		course,
		getHeaders()
	);

	return response.data.result;
};

export { getAllCourses, saveNewCourse };
