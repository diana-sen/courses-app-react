import React, { useCallback, useState } from 'react';

import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';

import { durationConverter } from '../../helpers/pipeDuration';

import { getAllAuthors, addAuthor } from '../../helpers/authorsNaming';
import './createCourse.css';

import {
	BUTTON_CREATE_COURSE,
	BUTTON_ADD_AUTHOR,
	BUTTON_CREATE_AUTHOR,
	BUTTON_DELETE_AUTHOR,
	BUTTON_CANCEL_COURSE,
} from '../../constants';
import { AuthorsList } from './AuthorsList/AuthorsList';

export const CreateCourse = ({ onCloseCreateCourse, onCreateCourse }) => {
	const [dataCourse, setDataCourse] = useState({
		duration: 0,
		authors: [],
	});

	const [allAuthors, setAllAuthors] = useState(getAllAuthors());
	const [courseAuthors, setCourseAuthors] = useState([]);

	const createCourse = () => {
		const title = document.querySelector('#title')?.value;
		const description = document.querySelector('#course-description')?.value;
		console.log(title);
		console.log(description);

		const objectCourse = {
			...dataCourse,
			title: title,
			description: description,
			authors: courseAuthors.map((author) => author.id),
		};

		if (areAllFieldsValid(objectCourse)) {
			console.log(objectCourse);
			onCreateCourse(objectCourse);
			onCloseCreateCourse();
		} else {
			alert('Please fill all fields');
		}
	};

	function areAllFieldsValid(objectCourse) {
		return (
			!!objectCourse.title &&
			objectCourse.title.length > 1 &&
			!!objectCourse.description &&
			objectCourse.description.length > 10 &&
			!!objectCourse.duration &&
			objectCourse.duration > 0 &&
			!!objectCourse.authors &&
			objectCourse.authors.length > 0
		);
	}

	function handleDuration(minutes) {
		let time = durationConverter(minutes);
		return time;
	}

	const addAuthorToCourse = useCallback((author) => {
		setCourseAuthors((authors) => [...authors, author]);
		setAllAuthors((authors) => authors.filter((item) => item.id !== author.id));
	}, []);

	const removeAuthorFromCourse = (author) => {
		setAllAuthors([...allAuthors, author]);
		setCourseAuthors((authors) =>
			authors.filter((item) => item.id !== author.id)
		);
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
						placeholder='text description here'
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
							onClick={() => {
								const authorName = document.querySelector('#author-name').value;
								if (!!authorName) {
									const author = addAuthor(authorName);
									console.log(author);
									setAllAuthors((authors) => [...authors, author]);
								} else {
									alert('Invalid author name');
								}
							}}
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
									setDataCourse({ ...dataCourse, duration: durationCourse });
									console.log(e.nativeEvent.data);
								} else {
									console.log(durationCourse);
									e.target.value = durationCourse.replace(enteredValue, '');
								}
							}}
						></Input>
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
