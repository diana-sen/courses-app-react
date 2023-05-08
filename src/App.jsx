import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { CourseInfo } from './components/Courses/components/CourseInfo/CourseInfo';
import { Login } from './components/Login/Login';
import { Registration } from './components/Registration/Registration';
import { PrivateRoute } from './components/Router/PrivateRoute';
import { PublicRoute } from './components/Router/PublicRouter';

import './App.css';

function App() {
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
					<Route path='registration' element={<Registration />}></Route>
					<Route path='login' element={<Login />}></Route>
				</Route>
				<Route path='*' element={<Navigate to='/login'></Navigate>}></Route>
			</Routes>
		</div>
	);
}

export default App;
