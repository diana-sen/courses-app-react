import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCoursebyId } from '../../../../helpers/coursesService';
import { Button } from '../../../../common/Button/Button';
import { durationConverter } from '../../../../helpers/pipeDuration';
import { getAuthors } from '../../../../helpers/authorsNaming';
import { BUTTON_BACK_TO_COURSES } from '../../../../constants';
import './courseInfo.css';

export const CourseInfo = () => {
	const navigate = useNavigate();
	const { courseId } = useParams();
	const course = getCoursebyId(courseId);
	const authors = getAuthors(course.authors).map((author) => {
		return <p key={author.name}>{author.name}</p>;
	});

	const goToCourses = () => {
		navigate('/courses');
	};

	return (
		<section key={course.id} className='app__course-info-section'>
			<h2 className='course__title'>{course.title}</h2>
			<div className='course__details-section'>
				<p className='course__description'>{course.description}</p>
				<p className='course__id'>
					<b>ID:</b> {course.id}
				</p>
				<p className='course__duration'>
					<b>Duration:</b> {durationConverter(course.duration)}
				</p>
				<p className='course__creation'>
					<b>Created:</b> {course.creationDate}
				</p>
				<div className='course_author'>
					<b>Authors:</b> {authors}
				</div>
			</div>

			<Button text={BUTTON_BACK_TO_COURSES} onClick={goToCourses} />
		</section>
	);
};
