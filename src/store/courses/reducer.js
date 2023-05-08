import * as actions from './actionTypes';

const coursesInitialState = [];

export const coursesReducer = (state = coursesInitialState, action) => {
	switch (action.type) {
		case actions.COURSES_ADD_ALL:
			const allCoursesPayload = action.payload;
			return allCoursesPayload;
		case actions.COURSES_ADD:
			return [...state, action.payload];
		case actions.COURSES_DELETE:
			const courseId = action.payload;
			return state.filter((course) => course.id !== courseId);
		case actions.COURSES_UPDATE:
			const coursePayload = action.payload;
			return [...state, coursePayload];
		default:
			return state;
	}
};
