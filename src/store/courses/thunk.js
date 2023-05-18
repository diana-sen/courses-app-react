import {
	deleteCourse,
	saveNewCourse,
	updateCourse,
} from '../../services/coursesService';
import {
	addCourse,
	deleteCourse as remove,
	updateCourse as update,
} from './actionCreators';

export const saveNewCourseThunk = (course) => {
	return async (dispatch) => {
		try {
			const newCourse = await saveNewCourse(course);
			dispatch(addCourse(newCourse));
		} catch (error) {
			console.error(error.message);
		}
	};
};

export const updateCourseThunk = (course) => {
	return async (dispatch) => {
		try {
			const updatedCourse = await updateCourse(course);
			dispatch(update(updatedCourse));
		} catch (error) {
			console.error(error.message);
		}
	};
};

export const deleteCourseThunk = (courseId) => {
	return async (dispatch) => {
		try {
			console.log(courseId);
			await deleteCourse(courseId);
			dispatch(remove(courseId));
		} catch (error) {
			console.error(error.message);
		}
	};
};
