import { AUTHORS_ADD, AUTHORS_ADD_ALL } from './actionTypes';

const authorsInitialState = [];

export const authorsReducer = (state = authorsInitialState, action) => {
	switch (action.type) {
		case AUTHORS_ADD_ALL:
			const allAuthorsPayload = action.payload;
			return allAuthorsPayload;
		case AUTHORS_ADD:
			const authorPayload = action.payload;
			return [...state, authorPayload];
		default:
			return state;
	}
};
