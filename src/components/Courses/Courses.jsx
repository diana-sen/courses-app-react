import { React, useState } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import { BUTTON_ADD_COURSE, mockedCoursesList } from '../../constants';
import { Button } from '../../common/Button/Button';
import { SearchBar } from './components/SearchBar/SearchBar';
import './courses.css';

const Courses = ({ onAddCourse, coursesList }) => {
	const [courses, setCourses] = useState(coursesList);
	const [query, setQuery] = useState('');

	const searchHandler = () => {
		const keys = ['title', 'id'];
		const searchResults = coursesList.filter((course) =>
			keys.some((key) =>
				course[key].toLowerCase().includes(query.toLowerCase())
			)
		);
		setCourses(searchResults);
	};

	const updateKeywords = (e) => {
		const value = e.target.value;
		if (!value) {
			setCourses(coursesList);
		}
		setQuery(e.target.value);
	};
	const courseCards = courses.map((course) => {
		return <CourseCard key={course.id} course={course} />;
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
