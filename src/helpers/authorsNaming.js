import { mockedAuthorsList } from '../constants';

export function getAuthors(authorsId) {
	let authors = mockedAuthorsList.filter((author) =>
		authorsId.includes(author.id)
	);
	console.log(authors);
	return authors;
}
