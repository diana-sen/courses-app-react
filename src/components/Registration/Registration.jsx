import React, { useState } from 'react';
import './registration.css';
import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BUTTON_REGISTER } from '../../constants';

export const Registration = () => {
	const [nameErrorMessage, setNameErrorMessage] = useState('');
	const [emailErrorMessage, setEmailErrorMessage] = useState('');
	const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

	const { location } = useLocation();
	const navigate = useNavigate();

	const register = (e) => {
		e.preventDefault();

		const name = document.querySelector('#name').value;
		const email = document.querySelector('#email').value;
		const password = document.querySelector('#password').value;

		const credentials = { name, email, password };

		if (validateForm(credentials)) {
			if (!location) {
				navigate('/login');
			} else {
				navigate('/registration');
			}
		}
	};

	const validateForm = (credentials) => {
		let isValid = true;

		let nameErrorMessage = '';
		let emailErrorMessage = '';
		let passwordErrorMessage = '';

		if (!credentials.name || credentials.name.length < 6) {
			nameErrorMessage = 'Please enter your name. Min length: 6 characters';
			isValid = false;
		}

		if (!credentials.email || !isEmailValid(credentials.email)) {
			emailErrorMessage = 'Invalid Email. Please verify it';
			isValid = false;
		}

		if (!credentials.password) {
			passwordErrorMessage = 'Please enter your password';
			isValid = false;
		}

		setNameErrorMessage(nameErrorMessage);
		setEmailErrorMessage(emailErrorMessage);
		setPasswordErrorMessage(passwordErrorMessage);

		return isValid;
	};

	const isEmailValid = (email) => {
		return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
	};

	return (
		<section className='registration-section'>
			<div className='registration-container'>
				<form onSubmit={register} className='registration-form'>
					<div>
						<label htmlFor='name'>Name:</label>
						<Input
							id='name'
							className='name'
							placeholderText='Enter your name'
							errorMessage={nameErrorMessage}
						></Input>
					</div>
					<div>
						<label htmlFor='email'>Email:</label>
						<Input
							id='email'
							className='email'
							placeholderText='Enter email'
							errorMessage={emailErrorMessage}
						></Input>
					</div>
					<div>
						<label htmlFor='password'> Password:</label>
						<Input
							id='password'
							className='password'
							placeholderText='Enter password'
							errorMessage={passwordErrorMessage}
							type='password'
						/>
					</div>
					<Button text={BUTTON_REGISTER}></Button>
				</form>
				<label className='registration-legend'>
					<span>If you already have an account, </span>
					<Link to='/login'>login</Link>
				</label>
			</div>
		</section>
	);
};
