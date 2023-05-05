import React from 'react';
import './button.css';

export const Button = ({ text, onClick }) => {
	return (
		<button className='app-common__button' onClick={onClick}>
			{text}
		</button>
	);
};
