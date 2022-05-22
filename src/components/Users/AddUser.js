import React, {useState} from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css';

function AddUser(props) {
    const[enteredUsername,setEnteredUsername]=useState('');
    const[enteredAge,setEnteredAge]=useState('');   
    // sumit form (get value + reset input)
    const addUserHandle = (event) => {
        event.preventDefault();
        // check validate
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 ){
            return;
        }
        if(+enteredAge < 1){
            return;
        }
        console.log(enteredUsername, enteredAge)
        setEnteredUsername('');
        setEnteredAge('');
    }

    const usernameChangeHandler = (e) =>{
        setEnteredUsername(e.target.value)
    }
    const ageChangeHandler = (e) =>{
        setEnteredAge(e.target.value)
    }
    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandle}>
                <label htmlFor="username">Username</label>
                <input 
                    id='username' 
                    type="text" 
                    value={enteredUsername}
                    onChange={usernameChangeHandler}></input>
                <label htmlFor="age">Age (Years)</label>
                <input 
                    id='age' 
                    type="number" 
                    value={enteredAge}
                    onChange={ageChangeHandler}></input>
                {/* <button type='submit'>Add User</button> */}
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
}

export default AddUser;