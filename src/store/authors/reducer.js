import { AUTHORS_SAVE, AUTHORS_SAVE_ALL } from './actionTypes';

const authorsInitialState = [];

export const authorsReducer = (state = authorsInitialState, action) => {
	switch (action.type) {
		case AUTHORS_SAVE_ALL:
			const allAuthorsPayload = action.payload;
			return allAuthorsPayload;
		case AUTHORS_SAVE:
			const authorPayload = action.payload;
			return [...state, authorPayload];
		default:
			return state;
	}
};
