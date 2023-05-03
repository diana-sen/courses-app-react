import React from 'react';
import './button.css';

export const Button = ({ text, onClick }) => {
	console.log('+++++++++++++++++++++');
	console.log(onClick);
	return (
		<button className='app-common__button' onClick={onClick}>
			{text}
		</button>
	);
};
