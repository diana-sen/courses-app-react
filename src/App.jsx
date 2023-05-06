import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import './App.css';

import { Login } from './pages/Login/Login';
import { Registration } from './pages/Registration/Registration';

function App() {
	return (
		<div id='app-container'>
			<Header />
			<Routes>
				<Route path='/courses' element={<Courses />}></Route>
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
