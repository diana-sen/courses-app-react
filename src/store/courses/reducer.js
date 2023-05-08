import {
	COURSES_DELETE,
	COURSES_SAVE,
	COURSES_SAVE_ALL,
	//COURSES_UPDATE,
} from './actionTypes';

const coursesInitialState = [];

export const coursesReducer = (state = coursesInitialState, action) => {
	switch (action.type) {
		case COURSES_SAVE_ALL:
			const allCoursesPayload = action.payload;
			return allCoursesPayload;
		case COURSES_SAVE:
			return [...state, action.payload];
		case COURSES_DELETE:
			const courseId = action.payload;
			return state.filter((course) => course.id !== courseId);
		/*		case COURSES_UPDATE:
			const coursePayload = action.payload;
			return [...state, coursePayload];  */
		default:
			return state;
	}
};
