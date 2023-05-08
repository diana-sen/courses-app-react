import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userLoggedOut } from '../../store/user/actionCreators';
import { getUserSelector } from '../../store/selectors';

import Logo from './components/Logo/Logo.jsx';
import { Button } from '../../common/Button/Button.jsx';

import { BUTTON_LOGOUT } from '../../constants';
import './header.css';

function Header() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const logOutUser = () => {
		window.localStorage.removeItem('token');
		window.localStorage.removeItem('userName');
		dispatch(userLoggedOut());
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
				<h1>EPAM Courses App</h1>
			</section>
			<UserSection />
		</header>
	);
}

export default Header;
