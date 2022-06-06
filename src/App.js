import React, { useState, Fragment } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import Portals from './components/Helpers/Portals';

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
	const numbers = [1, 2, 3]; 
	return (
		<Fragment>
			<Portals>Đây là portals 1</Portals>
			<AddUser onAddUser = {addUserHandler}></AddUser>
			<UserList users = {userList} ></UserList>
			{numbers.map((number) =>
				<>
					<div>test</div> 
					<Portals>Đây là portals 2</Portals>
				</>	
			)}
		</Fragment>
	);
}

export default App;
