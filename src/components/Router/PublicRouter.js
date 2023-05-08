import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContextProvider';
import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoute = () => {
	const { isAuthenticated } = useContext(AuthContext);

	if (isAuthenticated) {
		return <Navigate to='/courses' />;
	}

	return <Outlet />;
};
