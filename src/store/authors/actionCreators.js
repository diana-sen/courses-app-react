import { AUTHORS_SAVE, AUTHORS_SAVE_ALL } from './actionTypes';

export const saveAllAuthors = (authors) => ({
	type: AUTHORS_SAVE_ALL,
	payload: authors,
});

export const saveAuthor = (author) => ({
	type: AUTHORS_SAVE,
	payload: author,
});
