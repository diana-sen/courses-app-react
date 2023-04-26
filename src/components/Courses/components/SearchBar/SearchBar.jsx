import React from 'react';
import { BUTTON_TEXT } from '../../../../constants';
import { Button } from '../../../../common/Button/Button';
import './searchBar.css';

export const SearchBar = ({ labelText, placeholderText, onChange }) => {
	return (
		<div className='app__bar-section'>
			<input
				name='search-bar'
				className='app__search-bar'
				type='text'
				id='search'
				placeholder={placeholderText}
				onChange={onChange}
			></input>
			<label htmlFor='search'>{labelText}</label>
			<Button text={BUTTON_TEXT} />
		</div>
	);
};
