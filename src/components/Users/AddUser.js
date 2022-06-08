import React, {useState, useRef} from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

function AddUser(props) {
	const[enteredUsername, setEnteredUsername] = useState('');
	const[enteredAge, setEnteredAge] = useState('');
	const[error, setError] = useState();

	// sumit form (get value + reset input)
	const addUserHandle = (event) => {
		event.preventDefault();
		// check validate
		if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 ){
			setError({
				title: "Invalid input",
				message: "Please enter a valid age (none empty value)."
			});
			return;
		}
		if(+enteredAge < 1){
			setError({
				title: "Invalid age",
				message: "Please enter a valid name and age ( > 0)."
			});
			return;
		}
		console.log(enteredUsername, enteredAge)
		props.onAddUser(enteredUsername, enteredAge);
		setEnteredUsername('');
		setEnteredAge('');
	}

	const usernameChangeHandler = (e) =>{
		setEnteredUsername(e.target.value)
	}
	const ageChangeHandler = (e) =>{
		setEnteredAge(e.target.value)
	}
	const handleHideModal = () =>{
		console.log("dddddddddddddđhide")
		setError(null);
	}
	
	return (
		<Wrapper>
			{error && (
				<ErrorModal 
					title = {error.title} 
					message= {error.message} 
					onConfirm = {handleHideModal}	
				/>
			)}
			<Card className={classes.input}>
				<form onSubmit={addUserHandle}>
					<label htmlFor="username">Username</label>
					<input
						id='username'
						type="text"
						value={enteredUsername}
						onChange={usernameChangeHandler}
					>
					</input>
					<label htmlFor="age">Age (Years)</label>
					<input
						id='age'
						type="number"
						value={enteredAge}
						onChange={ageChangeHandler}
					>
					</input>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</Wrapper>
	);
}

export default AddUser;