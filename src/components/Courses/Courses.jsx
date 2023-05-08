import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import store from '../../store';

import CourseCard from './components/CourseCard/CourseCard';
import { Button } from '../../common/Button/Button';
import { SearchBar } from './components/SearchBar/SearchBar';

//import { getAllCourses } from '../../helpers/coursesService';

import { BUTTON_ADD_COURSE } from '../../constants';
import './courses.css';
import { getCoursesSelector } from '../../store/selectors';

const Courses = () => {
	const navigate = useNavigate();
	//const allCoursesList = getAllCourses(); //migrate to store
	//const [courses, setCourses] = useState(allCoursesList); // migrate to store:
	const [courses, setCourses] = useState(useSelector(getCoursesSelector));
	const [query, setQuery] = useState('');

	store.subscribe(() => {
		const courses = store.getState().courses;
		setCourses(courses);
	});

	const searchHandler = () => {
		const keys = ['title', 'id'];
		const searchResults = store
			.getState()
			.courses.filter((course) =>
				keys.some((key) =>
					course[key].toLowerCase().includes(query.toLowerCase())
				)
			);
		setCourses(searchResults);
	};

	const updateKeywords = (e) => {
		const value = e.target.value;
		if (!value) {
			setCourses(store.getState().courses);
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
