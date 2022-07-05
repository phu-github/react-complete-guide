import React, { useState, useEffect,useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) =>{
    switch (action.type){
        case "USER_INPUT":
            return {value: action.val , isValid: action.val.includes("@")}
        case "USER_BLUR":
            return {value: state.value, isValid: state.value.includes("@")}
        default: return {value:"", isValid: false}
    }       
}
const passReducer = (state, action) =>{
    switch (action.type){
        case "PASS_INPUT":
            return {value: action.val , isValid: action.val.trim().length > 6}
        case "PASS_BLUR":
            return {value: state.value, isValid: state.value.trim().length > 6}
        default: return {value:"", isValid: false}
    }       
}
const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: "", isValid: null}) 
  const [passState, dispatchPass] = useReducer(passReducer, {value: "", isValid: null}) 

  const {isValid: emailIsValide} = emailState;
  const {isValid: passIsValide} = passState;
  // 3. Active button when email + password is valid
  useEffect(() => {
    console.log("3. RUN CALLBACK LOGIN")
    const identifier = setTimeout(()=> {
      setFormIsValid(
        emailIsValide && passIsValide
      );
    }, 1000);
    return ()=>{ 
      console.log("4. CLEAN UP login");
      clearTimeout(identifier);
    }
  }, [emailIsValide, passIsValide]);

  //1. get value input by onChange for email + password
  const emailChangeHandler = (event) => {
    dispatchEmail({type: "USER_INPUT", val: event.target.value});
  };
  const passwordChangeHandler = (event) => {
    dispatchPass({type: "PASS_INPUT", val: event.target.value});
  };
  //2. Validate input by onBlur for email + password
  const validateEmailHandler = () => {
    dispatchEmail({type: "USER_BLUR"})
  };
  const validatePasswordHandler = () => {
    dispatchPass({type: "PASS_BLUR"})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passState.value);
  };
  console.log("1. RUN BODY");
  return (
    <Card className={classes.login}>
      {console.log("2. RUN RENDERING")}
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
