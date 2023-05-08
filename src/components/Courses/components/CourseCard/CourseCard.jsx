import React from 'react';

import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../common/Button/Button';
import { durationConverter } from '../../../../helpers/pipeDuration';
import { getAuthors } from '../../../../helpers/authorsNaming';
import { BUTTON_SHOW_COURSE } from '../../../../constants';

import './courseCard.css';

const CourseCard = ({ course }) => {
	const navigate = useNavigate();

	const authorsNames = (authors) => {
		let names = authors
			.map((author) => author.name)
			.reduce(
				(concatenatedAuthors, name) => concatenatedAuthors + ', ' + name,
				''
			);
		return names;
	};
	const authors = authorsNames(getAuthors(course.authors));

	const goToCourseInfo = () => {
		navigate(`./${course.id}`);
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
				<Button
					className='app__course-card--button app__button--edit-course'
					text={<img src='/edit-icon-white.svg' alt='Edit' />}
					onClick={goToCourseInfo}
				></Button>

				<Button
					className='app__course-card--button app__button--remove-course'
					text={<img src='/remove-icon-white.svg' alt='Remove' />}
					onClick={goToCourseInfo}
				></Button>
			</div>
		</section>
	);
};

export default CourseCard;
