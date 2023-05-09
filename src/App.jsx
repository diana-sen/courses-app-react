import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//import { userLoggedIn } from './store/user/actionCreators';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import { CourseForm } from './components/CourseForm/CourseForm';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { Login } from './components/Login/Login';
import { Registration } from './components/Registration/Registration';
import { PrivateRoute } from './components/Router/PrivateRoute';
import { PublicRoute } from './components/Router/PublicRouter';
import { PrivateAdminRoute } from './components/Router/PrivateAdminRoute';

import { addAllCourses } from './store/courses/actionCreators';
import { addAllAuthors } from './store/authors/actionCreators';
import { getAllAuthors } from './services/authorsService';
import { getAllCourses } from './services/coursesService';
import { initializeUser } from './store/user/thunk';

import './App.css';

function App() {
	const dispatch = useDispatch();

	const updateUserToStore = () => {
		const token = window.localStorage.getItem('token');
		if (token) {
			dispatch(initializeUser(token));
		}
	};

	const retrieveAllCourses = () => {
		getAllCourses()
			.then((response) => {
				const courses = response.data.result;
				dispatch(addAllCourses(courses));
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const retrieveAllAuthors = () => {
		getAllAuthors()
			.then((response) => {
				const authors = response.data.result;
				dispatch(addAllAuthors(authors));
			})
			.catch((error) => {
				console.error(error);
			});
	};

	updateUserToStore();
	retrieveAllAuthors();
	retrieveAllCourses();

	return (
		<div id='app-container'>
			<Header />
			<Routes>
				<Route path='/courses' element={<PrivateRoute />}>
					<Route index element={<Courses />}></Route>
					<Route path=':courseId' element={<CourseInfo />}></Route>
					<Route path='add' element={<CourseForm />}></Route>
				</Route>
				<Route path='/courses/add' element={<PrivateAdminRoute />}>
					<Route index element={<CourseForm />}></Route>
				</Route>
				<Route path='/courses/update' element={<PrivateAdminRoute />}>
					<Route path=':courseId' element={<CourseForm />}></Route>
				</Route>
				<Route path='/' element={<PublicRoute />}>
					<Route index element={<Login />}></Route>
					<Route path='registration' element={<Registration />}></Route>
					<Route path='login' element={<Login />}></Route>
				</Route>
				<Route path='*' element={<Navigate to='/login'></Navigate>}></Route>
			</Routes>
		</div>
	);
}

export default App;
