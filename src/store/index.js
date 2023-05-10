import { userReducer } from './user/reducer';
import { coursesReducer } from './courses/reducer';
import { authorsReducer } from './authors/reducer';

import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
	user: userReducer,
	courses: coursesReducer,
	authors: authorsReducer,
});

// thunk middleware is automatically added by configureStore *
const store = configureStore({ reducer: rootReducer });

export default store;

export function createTestStore() {
	const store = configureStore({ reducer: rootReducer });
	return store;
}
