import React from 'react';
import './button.css';

export const Button = ({ text, onClick, className }) => {
	const classes = className
		? `app-common__button ${className}`
		: 'app-common__button';

	return (
		<button className={classes} onClick={onClick}>
			{text}
		</button>
	);
};
