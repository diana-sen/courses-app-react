import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import { CreateCourse } from './components/CreateCourse/CreateCourse';

function App() {
	const [addCourse, setAddCourse] = useState(false);
	const toggleShowAddCourse = () => setAddCourse(!addCourse);

	if (addCourse) {
		return (
			<div id='app-container'>
				<Header />
				<CreateCourse onCloseCreateCourse={toggleShowAddCourse} />
			</div>
		);
	} else {
		return (
			<div id='app-container'>
				<Header />
				<Courses onAddCourse={toggleShowAddCourse} />
			</div>
		);
	}
}

export default App;
