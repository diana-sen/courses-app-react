import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { CourseInfo } from './components/Courses/components/CourseInfo/CourseInfo';
import './App.css';

import { Login } from './components/Login/Login';
import { Registration } from './components/Registration/Registration';

function App() {
	return (
		<div id='app-container'>
			<Header />
			<Routes>
				<Route path='/courses' element={<Courses />}></Route>
				<Route path='/courses/:courseId' element={<CourseInfo />}></Route>
				<Route
					path='/courses/add'
					element={<CreateCourse></CreateCourse>}
				></Route>
				<Route path='/registration' element={<Registration />}></Route>
				<Route path='/login' element={<Login />}></Route>
			</Routes>
		</div>
	);
}

export default App;
