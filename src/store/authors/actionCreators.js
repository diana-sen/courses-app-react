import { AUTHORS_ADD, AUTHORS_ADD_ALL } from './actionTypes';

export const addAllAuthors = (authors) => ({
	type: AUTHORS_ADD_ALL,
	payload: authors,
});

export const saveAuthor = (author) => ({
	type: AUTHORS_ADD,
	payload: author,
});
