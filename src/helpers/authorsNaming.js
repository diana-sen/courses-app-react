import { mockedAuthorsList } from '../constants';
import { v4 as uuid4 } from 'uuid';

export function getAuthors(authorsId) {
	let authors = mockedAuthorsList.filter((author) =>
		authorsId.includes(author.id)
	);

	return authors;
}

export function getAllAuthors() {
	return mockedAuthorsList;
}

export function addAuthor(authorName) {
	const author = { id: uuid4(), name: authorName };
	mockedAuthorsList.push(author);

	return author;
}
