import { saveNewAuthor } from '../../services/authorsService';
import { saveAuthor } from './actionCreators';

export const saveNewAuthorThunk = (author) => {
	return async (dispatch) => {
		try {
			const newAuthor = await saveNewAuthor(author);
			dispatch(saveAuthor(newAuthor));
		} catch (error) {
			console.log(error.message);
		}
	};
};
