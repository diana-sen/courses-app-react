import { userReducer } from './user/reducer';
import { coursesReducer } from './courses/reducer';
import { authorsReducer } from './authors/reducer';

import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
	userReducer,
	coursesReducer,
	authorsReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
