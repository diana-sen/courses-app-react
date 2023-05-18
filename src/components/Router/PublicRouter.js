import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getUserSelector } from '../../store/selectors';

export const PublicRoute = () => {
	const user = useSelector(getUserSelector);

	if (user.isAuth) {
		return <Navigate to='/courses' />;
	}

	return <Outlet />;
};
