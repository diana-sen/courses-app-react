import React from 'react';
import { Button } from '../../../common/Button/Button';

export const AuthorsList = ({ authorList, buttonText, onClick }) => {
	return (
		<ul>
			{authorList.map((author) => {
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
			})}
		</ul>
	);
};
