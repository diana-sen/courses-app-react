import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { getAllCourses, saveCourse } from './helpers/coursesService';

function App() {
	const [addCourse, setAddCourse] = useState(false);
	const [coursesList, setCoursesList] = useState(getAllCourses());
	const toggleShowAddCourse = () => setAddCourse(!addCourse);

	const addNewCourse = (course) => {
		const savedCourse = saveCourse(course);
		setCoursesList((courses) => [...courses, savedCourse]);
	};

	if (addCourse) {
		return (
			<div id='app-container'>
				<Header />
				<CreateCourse
					onCloseCreateCourse={toggleShowAddCourse}
					onCreateCourse={addNewCourse}
				/>
			</div>
		);
	} else {
		return (
			<div id='app-container'>
				<Header />
				<Courses onAddCourse={toggleShowAddCourse} coursesList={coursesList} />
			</div>
		);
	}
}

export default App;
