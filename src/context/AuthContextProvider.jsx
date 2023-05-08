import { createContext, useState, useCallback, useMemo } from 'react';

import { PropTypes } from 'prop-types';

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
	const [isAuthenticated, setIsAuthenticated] = useState(
		!!window.localStorage.getItem('token')
	);
	const [user, setUser] = useState(window.localStorage.getItem('userName'));

	const loginUser = useCallback((token, userName) => {
		window.localStorage.setItem('token', token);
		window.localStorage.setItem('userName', userName);
		setUser(userName);
		setIsAuthenticated(true);
	}, []);

	const logOut = useCallback(() => {
		window.localStorage.removeItem('token');
		window.localStorage.removeItem('userName');
		setIsAuthenticated(false);
		setUser(null);
	}, []);

	const values = useMemo(
		() => ({
			isAuthenticated,
			user,
			loginUser,
			logOut,
		}),
		[loginUser, logOut, isAuthenticated, user]
	);

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

AuthContextProvider.propTypes = { children: PropTypes.object };
