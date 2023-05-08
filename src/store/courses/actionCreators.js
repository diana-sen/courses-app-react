import { COURSES_SAVE, COURSES_SAVE_ALL } from './actionTypes';

export const saveAllCourses = (courses) => ({
	type: COURSES_SAVE_ALL,
	payload: courses,
});

export const saveCourse = (course) => ({
	type: COURSES_SAVE,
	payload: course,
});

export const deleteCourse = (courseId) => ({
	type: COURSES_SAVE_ALL,
	payload: courseId,
});

export const updateCourse = (course) => ({
	type: COURSES_SAVE,
	payload: course,
});
