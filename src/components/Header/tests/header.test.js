import '@testing-library/jest-dom';
import {
	render,
	screen,
	fireEvent,
	getByAltText,
} from '@testing-library/react';
import * as React from 'react';
import userEvent from '@testing-library/user-event'; //
import { BrowserRouter } from 'react-router-dom';

import Header from '../Header';
import { createTestStore } from '../../../store';
import { Provider } from 'react-redux';
import { userLoggedIn } from '../../../store/user/actionCreators';

let adminUserStore, otherUserStore, noEmailUserStore;
describe('Header', () => {
	const adminUser = {
		isAuth: true,
		name: 'Diana',
		email: 'admin@123.com',
		role: 'admin',
	};

	const otherUser = {
		isAuth: true,
		name: 'Diego',
		email: 'diegohdz@gmail.com',
		role: 'user',
	};

	const noEmailUser = {
		isAuth: false,
		name: '',
		email: '',
		role: '',
	};

	beforeEach(() => {
		adminUserStore = createTestStore(adminUser);
		adminUserStore.dispatch(userLoggedIn(adminUser));
		otherUserStore = createTestStore(otherUser);
		otherUserStore.dispatch(userLoggedIn(otherUser));
		noEmailUserStore = createTestStore(noEmailUser);
		noEmailUserStore.dispatch(userLoggedIn(noEmailUser));
	});

	it('it should have a logo and username - admin', () => {
		const { queryByTestId } = render(
			<Provider store={adminUserStore}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</Provider>
		);

		const headerContainer = queryByTestId('header');

		const logo = queryByTestId('logo');
		const user = queryByTestId('userName');
		expect(headerContainer).toBeInTheDocument();
		expect(logo).toBeInTheDocument();
		expect(logo).toHaveAttribute('src', '/project-logo.png');
		expect(user).toHaveTextContent(adminUser.name);
	});

	it('it should have a logo and no username', () => {
		const { queryByTestId } = render(
			<Provider store={noEmailUserStore}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</Provider>
		);

		const headerContainer = queryByTestId('header');

		const logo = queryByTestId('logo');
		const user = queryByTestId('userName');
		expect(headerContainer).toBeInTheDocument();
		expect(logo).toBeInTheDocument();
		expect(logo).toHaveAttribute('src', '/project-logo.png');
		expect(user).toHaveTextContent('');
	});
});
