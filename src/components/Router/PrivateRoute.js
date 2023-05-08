import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContextProvider';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
	const { isAuthenticated } = useContext(AuthContext);

	if (!isAuthenticated) {
		return <Navigate to='/login' />;
	}

	return <Outlet />;
};
