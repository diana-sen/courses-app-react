import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';

function App() {
	return (
		<div id='app-container'>
			<Header />
			<Courses />
		</div>
	);
}

export default App;
