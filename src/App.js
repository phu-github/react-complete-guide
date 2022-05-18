import React, { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
const App = () =>{
	console.log("App.js run");

	return (
		<div className="App">
			ON BRANCH LESSON 8
			<AddUser></AddUser>
		</div>
	);
}

export default App;
