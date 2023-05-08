import * as actions from './actionTypes';

export const addAllCourses = (courses) => ({
	type: actions.COURSES_ADD_ALL,
	payload: courses,
});

export const addCourse = (course) => ({
	type: actions.COURSES_ADD,
	payload: course,
});

export const deleteCourse = (courseId) => ({
	type: actions.COURSES_DELETE,
	payload: courseId,
});

export const updateCourse = (course) => ({
	type: actions.COURSES_UPDATE,
	payload: course,
});
