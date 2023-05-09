import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getUserSelector } from '../../store/selectors';
import { ADMIN_ROLE } from '../../constants';

export const PrivateAdminRoute = () => {
	const user = useSelector(getUserSelector);

	if (!user.isAuth) {
		return <Navigate to='/login' />;
	} else if (user.role !== ADMIN_ROLE) {
		return <Navigate to='/courses' />;
	}

	return <Outlet />;
};
