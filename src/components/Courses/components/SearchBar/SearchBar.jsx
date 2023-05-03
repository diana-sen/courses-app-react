import React from 'react';
import { BUTTON_TEXT } from '../../../../constants';
import { Button } from '../../../../common/Button/Button';
import { Input } from '../../../../common/Input/Input';
import './searchBar.css';

export const SearchBar = ({ labelText, onChange, onClick }) => {
	return (
		<div className='app__bar-section'>
			<Input
				className='app__search-bar'
				placeholderText='Enter course name'
				onChange={onChange}
			/>
			<label htmlFor='search'>{labelText}</label>
			<Button text={BUTTON_TEXT} onClick={onClick} />
		</div>
	);
};
