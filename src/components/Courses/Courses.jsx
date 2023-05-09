import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import store from '../../store';

import CourseCard from './components/CourseCard/CourseCard';
import { Button } from '../../common/Button/Button';
import { SearchBar } from './components/SearchBar/SearchBar';

//import { getAllCourses } from '../../helpers/coursesService';

import { ADMIN_ROLE, BUTTON_ADD_COURSE } from '../../constants';
import './courses.css';
import { getCoursesSelector, getUserRoleSelector } from '../../store/selectors';

const Courses = () => {
	const navigate = useNavigate();
	//const allCoursesList = getAllCourses(); //migrate to store
	//const [courses, setCourses] = useState(allCoursesList); // migrate to store:
	const [courses, setCourses] = useState(useSelector(getCoursesSelector));
	const [query, setQuery] = useState('');
	const isAdmin = useSelector(getUserRoleSelector) === ADMIN_ROLE;

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
		return <CourseCard key={course.id} course={course} isAdmin={isAdmin} />;
	});

	const goToAddCourse = () => {
		navigate('./add');
	};

	const AddCourseButton = () => {
		return useSelector(getUserRoleSelector) === ADMIN_ROLE ? (
			<Button
				className='app__button--show-course'
				onClick={goToAddCourse}
				text={BUTTON_ADD_COURSE}
			></Button>
		) : undefined;
	};

	return (
		<div className='app__course-wrapper'>
			<div className='app__bar'>
				<SearchBar onClick={searchHandler} onChange={updateKeywords} />
				<AddCourseButton />
			</div>

			<section>{courseCards}</section>
		</div>
	);
};

export default Courses;
