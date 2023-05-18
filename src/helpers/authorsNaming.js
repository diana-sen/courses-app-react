import { mockedAuthorsList } from '../constants';
import { v4 as uuid4 } from 'uuid';

export function getAuthors(authorsIds) {
	let authors = mockedAuthorsList.filter((author) =>
		authorsIds.includes(author.id)
	);
	console.log('Estos autores son de getAuthors:');
	console.log(authors);
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
