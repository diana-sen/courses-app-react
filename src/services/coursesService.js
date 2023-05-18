import axios from 'axios';

import {
	ALL_COURSES_ENDPOINT,
	BASE_URL,
	COURSE_ENDPOINT,
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

const updateCourse = async (course) => {
	const response = await axios.put(
		`${BASE_URL}${COURSE_ENDPOINT}/${course.id}`,
		course,
		getHeaders()
	);

	return response.data.result;
};

const deleteCourse = async (courseId) => {
	const response = await axios.delete(
		`${BASE_URL}${COURSE_ENDPOINT}/${courseId}`,
		getHeaders()
	);

	return response.data.result;
};

export { getAllCourses, saveNewCourse, updateCourse, deleteCourse };
