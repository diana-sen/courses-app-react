import React from 'react';

import { Button } from '../../../../common/Button/Button';
import { durationConverter } from '../../../../helpers/pipeDuration';
import { getAuthors } from '../../../../helpers/authorsNaming';
import { BUTTON_SHOW_COURSE } from '../../../../constants';

import './courseCard.css';

const CourseCard = ({ course }) => {
	const authors = authorsNames(getAuthors(course.authors));

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
			<div className='app__button--show-course'>
				<Button
					className='app__button--show-course'
					text={BUTTON_SHOW_COURSE}
				></Button>
			</div>
		</section>
	);
};

export default CourseCard;

function authorsNames(authors) {
	let names = authors
		.map((author) => author.name)
		.reduce((concatenatedAuthors, name) => concatenatedAuthors + ', ' + name);
	return names;
}
