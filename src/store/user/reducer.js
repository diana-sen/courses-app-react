import { USER_LOGGED_IN, USER_LOGGED_OUT } from './actionTypes';

const userInitialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};

export const userReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case USER_LOGGED_IN:
			const userPayload = action.payload;
			return {
				isAuth: true,
				name: userPayload.name,
				email: userPayload.email,
				token: userPayload.token,
			};
		case USER_LOGGED_OUT:
			return userInitialState;

		default:
			return state;
	}
};
