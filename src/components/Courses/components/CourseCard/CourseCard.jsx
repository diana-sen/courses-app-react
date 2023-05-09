import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../../../common/Button/Button';

import { durationConverter } from '../../../../helpers/pipeDuration';
//import { getAuthors } from '../../../../helpers/authorsNaming';

import { BUTTON_SHOW_COURSE } from '../../../../constants';

import './courseCard.css';
import { getAuthorsSelector } from '../../../../store/selectors';
import { deleteCourse } from '../../../../store/courses/actionCreators';

const CourseCard = ({ course, isAdmin }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const authorsNames = (authors) => {
		let names = authors
			.map((author) => author.name)
			.reduce(
				(concatenatedAuthors, name) => concatenatedAuthors + ', ' + name,
				''
			);
		return names;
	};
	// const authors = authorsNames(getAuthors(course.authors)); //migrate to store
	const authors = authorsNames(
		useSelector(getAuthorsSelector).filter((author) =>
			course.authors.includes(author.id)
		)
	);

	const goToCourseInfo = () => {
		navigate(`./${course.id}`);
	};

	const updateCourse = () => {
		navigate(`./update/${course.id}`);
	};

	const deleteCourseCard = () => {
		dispatch(deleteCourse(course.id));
	};

	const AdminButtons = () => {
		return isAdmin ? (
			<div>
				<Button
					className='app__course-card--button app__button--edit-course'
					text={<img src='/edit-icon-white.svg' alt='Edit' />}
					onClick={updateCourse}
				></Button>

				<Button
					className='app__course-card--button app__button--remove-course'
					text={<img src='/remove-icon-white.svg' alt='Remove' />}
					onClick={deleteCourseCard}
				></Button>
			</div>
		) : undefined;
	};

	return (
		<section className='app-section-card'>
			<h2 className='app__card-title'>{course.title}</h2>
			<h3 className='app__card-author' title={authors}>
				Author: {authors}
			</h3>
			<p className='app__card-description'>{course.description}</p>
			<h3 className='app__card-duration'>
				Duration: {durationConverter(course.duration)}
			</h3>
			<h3 className='app__card-creation'>Created: {course.creationDate}</h3>
			<div className='app__course-card--buttons'>
				<Button
					className='app__course-card--button'
					text={BUTTON_SHOW_COURSE}
					onClick={goToCourseInfo}
				></Button>
				<AdminButtons />
			</div>
		</section>
	);
};

export default CourseCard;
