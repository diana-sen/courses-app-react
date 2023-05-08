import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CourseCard from './components/CourseCard/CourseCard';
import { Button } from '../../common/Button/Button';
import { SearchBar } from './components/SearchBar/SearchBar';

import { getAllCourses } from '../../helpers/coursesService';

import { BUTTON_ADD_COURSE } from '../../constants';
import './courses.css';

const Courses = () => {
	const navigate = useNavigate();
	const allCoursesList = getAllCourses(); //migrate to store
	const [courses, setCourses] = useState(allCoursesList);
	const [query, setQuery] = useState('');

	const searchHandler = () => {
		const keys = ['title', 'id'];
		const searchResults = allCoursesList.filter((course) =>
			keys.some((key) =>
				course[key].toLowerCase().includes(query.toLowerCase())
			)
		);
		setCourses(searchResults);
	};

	const updateKeywords = (e) => {
		const value = e.target.value;
		if (!value) {
			setCourses(allCoursesList);
		}
		setQuery(e.target.value);
	};
	const courseCards = courses.map((course) => {
		return <CourseCard key={course.id} course={course} />;
	});

	const goToAddCourse = () => {
		navigate('./add');
	};

	return (
		<div className='app__course-wrapper'>
			<div className='app__bar'>
				<SearchBar onClick={searchHandler} onChange={updateKeywords} />
				<Button
					className='app__button--show-course'
					onClick={goToAddCourse}
					text={BUTTON_ADD_COURSE}
				></Button>
			</div>

			<section>{courseCards}</section>
		</div>
	);
};

export default Courses;
