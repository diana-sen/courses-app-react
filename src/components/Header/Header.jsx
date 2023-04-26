import React from 'react';
import './header.css';
import Logo from './components/Logo/Logo.jsx';
import { Button } from '../../common/Button/Button.jsx';
import { BUTTON_LOGOUT } from '../../constants';

function Header() {
	return (
		<header className='app-header'>
			<Logo />
			<UserName />
			<Button text={BUTTON_LOGOUT} />
		</header>
	);
}

export default Header;

const UserName = () => <div className='app-user-name'>Diana</div>;
