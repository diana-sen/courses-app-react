import React from 'react';
import { Button } from '../../../common/Button/Button';

import './authorsList.css';

export const AuthorsList = ({ authorList, buttonText, onClick }) => {
	const Authors = ({ authors }) => {
		return authorList.map((author) => {
			return (
				<li key={author.id} className='add-list-current-authors'>
					<span>{author.name}</span>
					<Button
						className='add-author'
						onClick={() => {
							onClick(author);
						}}
						text={buttonText}
					></Button>
				</li>
			);
		});
	};

	return (
		<>
			{authorList?.length > 0 ? (
				<Authors authors={authorList} />
			) : (
				<label className='authorsList__no-authors'>No authors!</label>
			)}
		</>
	);
};
