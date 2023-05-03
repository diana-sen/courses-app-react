import React from 'react';
import './input.css';

export const Input = ({ className, placeholderText, onChange }) => {
	return (
		<input
			id='commonInput'
			type='text'
			className={className}
			placeholder={placeholderText}
			onChange={onChange}
		></input>
	);
};
