import React, { useContext } from 'react';
import './header.css';
import Logo from './components/Logo/Logo.jsx';
import { Button } from '../../common/Button/Button.jsx';
import { BUTTON_LOGOUT } from '../../constants';
import { AuthContext } from '../../context/AuthContextProvider';
import { useNavigate } from 'react-router-dom';

function Header() {
	const { isAuthenticated, user, logOut } = useContext(AuthContext);
	const navigate = useNavigate();

	const logOutUser = () => {
		navigate('/login');
		logOut();
	};

	const UserSection = () => {
		if (isAuthenticated) {
			return (
				<section className='app-user-name'>
					<div>{user}</div>
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
