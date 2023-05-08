import React, { useCallback, useState } from 'react';

import store from '../../store';

import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';

import { durationConverter } from '../../helpers/pipeDuration';

import { addAuthor } from '../../helpers/authorsNaming';

import { saveCourse } from '../../helpers/coursesService';
import './createCourse.css';

import {
	BUTTON_CREATE_COURSE,
	BUTTON_ADD_AUTHOR,
	BUTTON_CREATE_AUTHOR,
	BUTTON_DELETE_AUTHOR,
	BUTTON_CANCEL_COURSE,
} from '../../constants';
import { AuthorsList } from './AuthorsList/AuthorsList';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthorsSelector } from '../../store/selectors';
import { saveAuthor } from '../../store/authors/actionCreators';

export const CreateCourse = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [dataCourse, setDataCourse] = useState({
		duration: 0,
		authors: [],
	});

	const [allAuthors, setAllAuthors] = useState(useSelector(getAuthorsSelector));
	const [courseAuthors, setCourseAuthors] = useState([]);
	store.subscribe(() => {
		const authors = store.getState().authors;
		const courseAuthorsIds = courseAuthors.map((author) => author.id);
		console.log(courseAuthorsIds);
		setAllAuthors(
			authors.filter((author) => !courseAuthorsIds.includes(author.id))
		);
	});

	const createCourse = () => {
		const title = document.querySelector('#title')?.value;
		const description = document.querySelector('#course-description')?.value;

		const objectCourse = {
			...dataCourse,
			title: title,
			description: description,
			authors: courseAuthors.map((author) => author.id),
		};

		const missingFields = getMissingFields(objectCourse);
		if (missingFields) {
			alert('Please fill all the missing fields:\n' + missingFields);
		} else {
			saveCourse(objectCourse);
			onCloseCreateCourse();
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

		if (!objectCourse.duration || objectCourse.duration === 0) {
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
		setAllAuthors((authors) => authors.filter((item) => item.id !== author.id));
	}, []);

	const removeAuthorFromCourse = (author) => {
		setCourseAuthors((authors) =>
			authors.filter((item) => item.id !== author.id)
		);
		setAllAuthors((authors) => [...authors, author]);
	};

	const addNewAuthor = useCallback(() => {
		const authorName = document.querySelector('#author-name').value;
		if (!!authorName) {
			const author = addAuthor(authorName);
			dispatch(saveAuthor(author));
			//setAllAuthors((authors) => [...new Set([...authors, author])]);
		} else {
			alert('Invalid author name');
		}
	}, [dispatch]);

	const onCloseCreateCourse = () => {
		navigate('/courses');
	};

	return (
		<div className='app__add-wrapper'>
			<div className='app__add-title-description-section'>
				<div className='app__add-title'>
					<h2>Title: </h2>
					<Input
						placeholderText='Add title here...'
						id='title'
						className='app__add-input'
					></Input>
				</div>
				<div className='app__add-button'>
					<Button text={BUTTON_CREATE_COURSE} onClick={createCourse}></Button>
					<Button
						text={BUTTON_CANCEL_COURSE}
						onClick={onCloseCreateCourse}
					></Button>
				</div>
				<div className='app__add-description-section'>
					<h3>Description: </h3>
					<textarea
						maxLength='500'
						placeholder='Add course description. Maximum 500 characters'
						id='course-description'
						name='course-description'
						rows='5'
						cols='50'
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
									setDataCourse((courseInfo) => ({
										...courseInfo,
										duration: Number.parseInt(durationCourse),
									}));
								} else {
									e.target.value = durationCourse.replace(enteredValue, '');
								}
							}}
						></Input>
						<label>minutes</label>
						<h1>{handleDuration(dataCourse.duration)}</h1>
					</div>
				</div>
				<div className='add-current-author-section'>
					<h3>Author</h3>
					<div className='current-list-authors'>
						<AuthorsList
							authorList={allAuthors}
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
