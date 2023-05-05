import React, { useState } from 'react';

import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';

import { durationConverter } from '../../helpers/pipeDuration';
import { getcurrentDate } from '../../helpers/dateGenerator';

import { getAllAuthors } from '../../helpers/authorsNaming';
import './createCourse.css';

import {
	BUTTON_CREATE_COURSE,
	BUTTON_ADD_AUTHOR,
	BUTTON_CREATE_AUTHOR,
	BUTTON_DELETE_AUTHOR,
	BUTTON_CANCEL_COURSE,
	//	CANCEL_CREATE_COURSE_LABEL,
} from '../../constants';

export const CreateCourse = ({ onCloseCreateCourse }) => {
	const [dataCourse, setDataCourse] = useState({
		title: '',
		description: '',
		creationDate: '',
		duration: 0,
		authors: [],
	});

	const [newDataAuthor, setnewDataAuthor] = useState({
		id: '',
		name: '',
	});

	const createCourse = () => {
		const title = document.querySelector('#title')?.value;
		const description = document.querySelector('#course-description')?.value;
		console.log(title);
		console.log(description);

		const objectCourse = {
			...dataCourse,
			title: title,
			description: description,
			creationDate: getcurrentDate(),
		};

		if (areAllFieldsValid(objectCourse)) {
			console.log(objectCourse);
			onCloseCreateCourse();
		} else {
			alert('Please fill all fields');
		}
	};

	function areAllFieldsValid(objectCourse) {
		return (
			!!objectCourse.title &&
			objectCourse.title.length > 2 &&
			!!objectCourse.description &&
			objectCourse.description.length > 10 &&
			!!objectCourse.duration &&
			objectCourse.duration > 0
		);
	}

	function handleDuration(minutes) {
		let time = durationConverter(minutes);
		return time;
	}

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
							placeholder='Enter author here...'
							name='author'
							className='add-author-input'
							onChange={() => {}}
						></Input>
						<Button
							onClick={() => {}}
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
					<div>
						<ul>
							{getAllAuthors().map((author) => {
								return (
									<li className='add-list-current-authors'>
										<span>{author.name}</span>
										<Button
											className='add-author'
											onClick={() => {}}
											text={BUTTON_ADD_AUTHOR}
										></Button>
									</li>
								);
							})}
						</ul>
					</div>
					<div className='authors-list-section'>
						<h3>Course Authors</h3>
						<span>Author list is empty</span>
					</div>
				</div>
			</div>
		</div>
	);
};
