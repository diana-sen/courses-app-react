import { mockedAuthorsList } from '../constants';

export function getAuthors(authorsId) {
	let authors = mockedAuthorsList.filter((author) =>
		authorsId.includes(author.id)
	);

	return authors;
}

export function getAllAuthors() {
	return mockedAuthorsList;
}
