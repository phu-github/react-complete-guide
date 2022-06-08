import React, {useState, useRef} from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

function AddUser(props) {
	const nameInputRef = useRef();
	const ageInputRef = useRef();	
	const[error, setError] = useState();

	// sumit form (get value + reset input)
	const addUserHandle = (event) => {
		event.preventDefault();
		console.log(nameInputRef);
		const enterNameInputRef = nameInputRef.current.value;
		const enterAgeInputRef = ageInputRef.current.value;
		// check validate
		if(enterNameInputRef.trim().length === 0 || enterAgeInputRef.trim().length === 0 ){
			setError({
				title: "Invalid input",
				message: "Please enter a valid age (none empty value)."
			});
			return;
		}
		if(+enterAgeInputRef < 1){
			setError({
				title: "Invalid age",
				message: "Please enter a valid name and age ( > 0)."
			});
			return;
		}
		console.log(enterNameInputRef, enterAgeInputRef)
		props.onAddUser(enterNameInputRef, enterAgeInputRef);
		nameInputRef.current.value = '';
		ageInputRef.current.value = '';
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
						ref = {nameInputRef}
					>
					</input>
					<label htmlFor="age">Age (Years)</label>
					<input
						id='age'
						type="number"
						ref = {ageInputRef}
					>
					</input>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</Wrapper>
	);
}

export default AddUser;