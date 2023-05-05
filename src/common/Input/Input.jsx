import React from 'react';
import './input.css';

export const Input = ({ id, className, placeholderText, onChange }) => {
	return (
		<input
			id={id}
			type='text'
			className={className}
			placeholder={placeholderText}
			onChange={onChange}
		></input>
	);
};
