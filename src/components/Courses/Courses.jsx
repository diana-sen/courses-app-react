import { React, useState } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import { BUTTON_ADD_COURSE, mockedCoursesList } from '../../constants';
import { Button } from '../../common/Button/Button';
import { SearchBar } from './components/SearchBar/SearchBar';
import './courses.css';

const Courses = ({ onAddCourse }) => {
	const [courses, setCourses] = useState(mockedCoursesList);
	const [query, setQuery] = useState('');

	const searchHandler = () => {
		const keys = ['title', 'id'];
		const searchResults = mockedCoursesList.filter((course) =>
			keys.some((key) =>
				course[key].toLowerCase().includes(query.toLowerCase())
			)
		);
		setCourses(searchResults);
	};

	const updateKeywords = (e) => {
		const value = e.target.value;
		if (!value) {
			setCourses(mockedCoursesList);
		}
		setQuery(e.target.value);
	};
	const courseCards = courses.map((course) => {
		return (
			<div>
				<CourseCard course={course} />
			</div>
		);
	});

	return (
		<div className='app__course-wrapper'>
			<div className='app__bar'>
				<SearchBar onClick={searchHandler} onChange={updateKeywords} />
				<Button
					className='app__button--show-course'
					onClick={onAddCourse}
					text={BUTTON_ADD_COURSE}
				></Button>
			</div>

			<section>{courseCards}</section>
		</div>
	);
};

export default Courses;
