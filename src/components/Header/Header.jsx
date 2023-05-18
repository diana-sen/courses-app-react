import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getUserSelector } from '../../store/selectors';

import Logo from './components/Logo/Logo.jsx';
import { Button } from '../../common/Button/Button.jsx';

import { BUTTON_LOGOUT } from '../../constants';
import './header.css';
import { logout } from '../../store/user/thunk';

function Header() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const logOutUser = () => {
		dispatch(logout());
		window.localStorage.removeItem('token');
		navigate('/login');
	};

	const user = useSelector(getUserSelector);
	const UserSection = () => {
		if (user.isAuth) {
			return (
				<section className='app-user-name'>
					<div>{user.name}</div>
					<Button text={BUTTON_LOGOUT} onClick={logOutUser} />
				</section>
			);
		}
	};

	return (
		<header className='app-header'>
			<section className='app-logo'>
				<Logo />
				<h1>Courses App</h1>
			</section>
			<UserSection />
		</header>
	);
}

export default Header;
