import React from 'react';
import './input.css';

export const Input = ({
	id,
	className,
	value,
	placeholderText,
	onChange,
	type,
	errorMessage,
}) => {
	if (!type) {
		type = 'text';
	}

	const ErrorLabel = () => {
		return errorMessage ? (
			<label className='error-message'>{errorMessage}</label>
		) : undefined;
	};

	let classNames = errorMessage ? `${className} input-error` : className;

	return (
		<div className='input-common'>
			<input
				id={id}
				type={type}
				className={classNames}
				value={value}
				placeholder={placeholderText}
				onChange={onChange}
			></input>
			<ErrorLabel />
		</div>
	);
};
