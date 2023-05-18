import { mockedCoursesList } from '../constants';
import { v4 as uuid4 } from 'uuid';

import { getcurrentDate } from './dateGenerator';

export function getAllCourses() {
	return mockedCoursesList;
}

export function saveCourse(courseData) {
	const course = { id: uuid4(), ...courseData, creationDate: getcurrentDate() };
	mockedCoursesList.push(course);

	return course;
}

export function getCoursebyId(courseId) {
	const foundCourse = mockedCoursesList.find(
		(course) => course.id === courseId
	);

	return foundCourse;
}
