import { mockedCoursesList } from '../constants';
import { v4 as uuid4 } from 'uuid';

import { getcurrentDate } from './dateGenerator';

export function getAllCourses() {
	return mockedCoursesList;
}

export function saveCourse(courseData) {
	const course = { id: uuid4(), ...courseData, creationDate: getcurrentDate() };

	console.log(course);
	mockedCoursesList.push(course);

	return course;
}
