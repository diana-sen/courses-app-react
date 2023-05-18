import axios from 'axios';

import {
	ALL_AUTHORS_ENDPOINT,
	BASE_URL,
	SAVE_NEW_AUTHOR_ENDPOINT,
} from './servicesConstants';

const getHeaders = () => {
	const token = window.localStorage.getItem('token');
	return {
		headers: {
			Authorization: token,
		},
	};
};

const getAllAuthors = () =>
	axios.get(`${BASE_URL}${ALL_AUTHORS_ENDPOINT}`, getHeaders());

const saveNewAuthor = async (author) => {
	const response = await axios.post(
		`${BASE_URL}${SAVE_NEW_AUTHOR_ENDPOINT}`,
		{ name: author },
		getHeaders()
	);
	return response.data.result;
};

export { getAllAuthors, saveNewAuthor };
