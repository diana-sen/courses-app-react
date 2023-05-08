import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContextProvider';

import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';

import { loginUserService } from '../../services/authService';

import { BUTTON_LOGIN } from '../../constants';
import './login.css';

export const Login = () => {
	const { isAuthenticated, loginUser } = useContext(AuthContext);
	const [emailErrorMessage, setEmailErrorMessage] = useState('');
	const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		if (isAuthenticated) {
			navigate('/courses');
		}
	});

	const login = async (e) => {
		e.preventDefault();
		const email = document.querySelector('#email').value;
		const password = document.querySelector('#password').value;
		const credentials = { email, password };

		if (validateForm(credentials)) {
			await loginUserService(credentials)
				.then((response) => {
					const token = response.data.result;
					const userName = response.data.user.name;
					loginUser(token, userName);
					navigate('/courses');
				})
				.catch((error) => {
					console.log(error);
					console.log(error.message);
					if (error.response) {
						alert('Unable to log in.\nInvalid password');
					} else {
						alert('Unable to log in.\nAn error occurred');
					}
				});
		}
	};

	const validateForm = (credentials) => {
		let isValid = true;

		let emailErrorMessage = '';
		let passwordErrorMessage = '';

		if (!credentials.email || !isEmailValid(credentials.email)) {
			emailErrorMessage = 'Invalid Email. Please verify it';
			isValid = false;
		}

		if (!credentials.password) {
			passwordErrorMessage = 'Please enter your password';
			isValid = false;
		}

		setEmailErrorMessage(emailErrorMessage);
		setPasswordErrorMessage(passwordErrorMessage);

		return isValid;
	};

	const isEmailValid = (email) => {
		return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
	};

	return (
		<section className='login-section'>
			<div className='login-container'>
				<form onSubmit={login} className='login-form'>
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
					<Button text={BUTTON_LOGIN}></Button>
				</form>
				<label className='login-legend'>
					<span>If you don't have an account, register </span>
					<Link to='/registration'>here</Link>
				</label>
			</div>
		</section>
	);
};
