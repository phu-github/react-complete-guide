import React, { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
const App = () =>{
	console.log("App.js run");
	const [userList , setUserList]  = useState([]);

	const addUserHandler = (uName, uAge) =>{
		setUserList((preUserList)=>{
			return [
				...preUserList, 
				{ name: uName, age: uAge, id: Math.random().toString()}
			];
		})
	}
	 
	return (
		<div className="App">
			ON BRANCH LESSON 8
			<AddUser onAddUser = {addUserHandler}></AddUser>
			<UserList users = {userList} ></UserList>
		</div>
	);
}

export default App;
