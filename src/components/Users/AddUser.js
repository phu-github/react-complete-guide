import React from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';

function AddUser(props) {
    const addUserHandle = (event) => {
        event.preventDefault();
    }
    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandle}>
                <label htmlFor="username">Username</label>
                <input id='username' type="text"></input>
                <label htmlFor="age">Age (Years)</label>
                <input id='age' type="number"></input>
                <button type='submit'>Add User</button>
            </form>
        </Card>
    );
}

export default AddUser;