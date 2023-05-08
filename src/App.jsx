import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { userLoggedIn } from './store/user/actionCreators';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { Login } from './components/Login/Login';
import { Registration } from './components/Registration/Registration';
import { PrivateRoute } from './components/Router/PrivateRoute';
import { PublicRoute } from './components/Router/PublicRouter';

import './App.css';
import { getAllAuthors } from './services/authorsService';
import { addAllAuthors } from './store/authors/actionCreators';

function App() {
	const dispatch = useDispatch();

	const updateStore = () => {
		const token = window.localStorage.getItem('token');
		if (token) {
			const name = window.localStorage.getItem('userName');
			const email = window.localStorage.getItem('email');
			dispatch(userLoggedIn({ name, email, token }));
		}
	};

	const retrieveAllAuthors = () => {
		getAllAuthors()
			.then((response) => {
				const authors = response.data.result;
				dispatch(addAllAuthors(authors));
				console.log(authors);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	updateStore();
	retrieveAllAuthors();

	return (
		<div id='app-container'>
			<Header />
			<Routes>
				<Route path='/courses' element={<PrivateRoute />}>
					<Route index element={<Courses />}></Route>
					<Route path=':courseId' element={<CourseInfo />}></Route>
					<Route path='add' element={<CreateCourse />}></Route>
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
