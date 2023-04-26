import React from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import { BUTTON_ADD_COURSE, mockedCoursesList } from '../../constants';
import { Button } from '../../common/Button/Button';
import { SearchBar } from './components/SearchBar/SearchBar';
import './courses.css';

const Courses = () => {
	const courseCards = mockedCoursesList.map((course) => {
		return (
			<div>
				<CourseCard course={course} />
			</div>
		);
	});

	return (
		<div className='app__course-wrapper'>
			<div className='app__bar'>
				<SearchBar />
				<Button
					className='app__button--show-course'
					text={BUTTON_ADD_COURSE}
				></Button>
			</div>

			<section>{courseCards}</section>
		</div>
	);
};

export default Courses;
