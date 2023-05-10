import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import store from '../../store';
import { getAuthorsSelector, getCoursesSelector } from '../../store/selectors';

import {
	saveNewCourseThunk,
	updateCourseThunk,
} from '../../store/courses/thunk';
import { saveNewAuthorThunk } from '../../store/authors/thunk';

import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';
import { AuthorsList } from './AuthorsList/AuthorsList';

import { durationConverter } from '../../helpers/pipeDuration';

import './courseForm.css';
import {
	BUTTON_CREATE_COURSE,
	BUTTON_ADD_AUTHOR,
	BUTTON_CREATE_AUTHOR,
	BUTTON_DELETE_AUTHOR,
	BUTTON_CANCEL_COURSE,
	BUTTON_UPDATE_COURSE,
} from '../../constants';

export const CourseForm = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { courseId } = useParams();

	const allCourses = useSelector(getCoursesSelector);
	const allAuthorsStore = useSelector(getAuthorsSelector);

	let initialState;
	if (courseId) {
		const course = allCourses.find((course) => course.id === courseId);
		const initialCourseAuthors = allAuthorsStore.filter((author) =>
			course.authors.includes(author.id)
		);

		const initialAvailableAuthors = allAuthorsStore.filter(
			(author) => !course.authors.includes(author.id)
		);

		initialState = {
			title: course.title,
			description: course.description,
			courseAuthors: initialCourseAuthors,
			availableAuthors: initialAvailableAuthors,
			duration: course.duration,
		};
	} else {
		initialState = {
			title: '',
			description: '',
			courseAuthors: [],
			availableAuthors: allAuthorsStore,
			duration: 0,
		};
	}

	const [title, setTitle] = useState(initialState.title);
	const [description, setDescription] = useState(initialState.description);
	const [duration, setDuration] = useState(initialState.duration);
	const [availableAuthors, setAvailableAuthors] = useState(
		initialState.availableAuthors
	);
	const [courseAuthors, setCourseAuthors] = useState(
		initialState.courseAuthors
	);

	const unsubscribeStore = store.subscribe(() => {
		const authors = store.getState().authors;
		const courseAuthorsIds = courseAuthors.map((author) => author.id);
		setAvailableAuthors(
			authors.filter((author) => !courseAuthorsIds.includes(author.id))
		);
	});

	const saveCourse = () => {
		const objectCourse = {
			duration,
			title,
			description,
			authors: courseAuthors.map((author) => author.id),
		};

		const missingFields = getMissingFields(objectCourse);
		if (missingFields) {
			alert('Please fill all the missing fields:\n' + missingFields);
		} else {
			if (courseId) {
				dispatch(updateCourseThunk({ ...objectCourse, id: courseId }));
			} else {
				dispatch(saveNewCourseThunk(objectCourse));
			}

			onCloseSaveCourse();
		}
	};

	const getMissingFields = (objectCourse) => {
		let missingFields = '';
		if (!objectCourse.title || objectCourse.title.length < 1) {
			missingFields += '• Title: enter minimum 1 character\n';
		}

		if (!objectCourse.description || objectCourse.description.length < 10) {
			missingFields += '• Description: enter minimum 10 characters\n';
		}

		if (
			!objectCourse.duration ||
			Number.isNaN(objectCourse.duration) ||
			objectCourse.duration === 0
		) {
			missingFields += '• Duration: enter a number greater than zero\n';
		}

		if (!objectCourse.authors || objectCourse.authors.length === 0) {
			missingFields += '• Authors: select at least one author';
		}
		return missingFields;
	};

	const handleDuration = (minutes) => {
		let time = durationConverter(minutes);
		return time;
	};

	const addAuthorToCourse = useCallback((author) => {
		setCourseAuthors((authors) => [...authors, author]);
		setAvailableAuthors((authors) =>
			authors.filter((item) => item.id !== author.id)
		);
	}, []);

	const removeAuthorFromCourse = (author) => {
		setCourseAuthors((authors) =>
			authors.filter((item) => item.id !== author.id)
		);
		setAvailableAuthors((authors) => [...authors, author]);
	};

	const addNewAuthor = useCallback(() => {
		const authorName = document.querySelector('#author-name').value;
		if (!!authorName) {
			dispatch(saveNewAuthorThunk(authorName));
		} else {
			alert('Invalid author name');
		}
	}, [dispatch]);

	const onCloseSaveCourse = () => {
		unsubscribeStore();
		navigate('/courses');
	};

	return (
		<div className='app__add-wrapper'>
			<div className='app__add-title-description-section'>
				<div className='app__add-title'>
					<h2>Title:</h2>
					<Input
						value={title}
						placeholderText='Add title here...'
						id='title'
						className='app__add-input'
						onChange={(e) => setTitle(e.target.value)}
					></Input>
				</div>
				<div className='app__add-button'>
					<Button
						text={courseId ? BUTTON_UPDATE_COURSE : BUTTON_CREATE_COURSE}
						onClick={saveCourse}
					></Button>
					<Button
						text={BUTTON_CANCEL_COURSE}
						onClick={onCloseSaveCourse}
					></Button>
				</div>
				<div className='app__add-description-section'>
					<h3>Description: </h3>
					<textarea
						value={description}
						maxLength='500'
						placeholder='Add course description. Maximum 500 characters'
						id='course-description'
						name='course-description'
						rows='5'
						cols='50'
						onChange={(e) => setDescription(e.target.value)}
					></textarea>
				</div>
			</div>

			<div className='app__add-authors-section'>
				<div className='authors-duration-section'>
					<div className='create-author-section'>
						<h3>Add Author</h3>
						<h4>Author name: </h4>
						<Input
							id='author-name'
							placeholder='Enter author here...'
							name='author'
							className='add-author-input'
							onChange={() => {}}
						></Input>
						<Button
							onClick={addNewAuthor}
							text={BUTTON_CREATE_AUTHOR}
							className='add-author-button'
						></Button>
					</div>
					<div className='create-duration-section'>
						<h3>Duration: </h3>
						<Input
							value={duration}
							placeholder='Enter duration in minutes...'
							id='course-duration'
							className='add-duration'
							onChange={(e) => {
								const enteredValue = e.nativeEvent.data;
								const durationCourse = e.target.value;
								if (
									Number.isInteger(enteredValue * 1) ||
									enteredValue == null
								) {
									setDuration(Number.parseInt(durationCourse));
								} else {
									e.target.value = durationCourse.replace(enteredValue, '');
								}
							}}
						></Input>
						<label>minutes</label>
						<h1>{handleDuration(duration)}</h1>
					</div>
				</div>
				<div className='add-current-author-section'>
					<h3>Author</h3>
					<div className='current-list-authors'>
						<AuthorsList
							authorList={availableAuthors}
							buttonText={BUTTON_ADD_AUTHOR}
							onClick={addAuthorToCourse}
						/>
					</div>
					<div className='authors-list-section'>
						<h3>Course Authors</h3>
						<AuthorsList
							authorList={courseAuthors}
							buttonText={BUTTON_DELETE_AUTHOR}
							onClick={removeAuthorFromCourse}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
