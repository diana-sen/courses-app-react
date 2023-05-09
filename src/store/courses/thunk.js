import { saveNewCourse } from '../../services/coursesService';
import { addCourse } from './actionCreators';

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
