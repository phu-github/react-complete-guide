import React from 'react';
import './NewExpense.scss';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) =>{
    console.log("[1] NewExpense.js run");
    const recieveExpenseData = (enterExpenseData) =>{
        const expenseData ={
            ...enterExpenseData,
            id: Math.random().toString()
        };
        console.log("Dữ liệu từ Child -> Parent: ", expenseData);
        props.onReciveExpense(expenseData);
    }
    return(
        <ExpenseForm onRecieveExpenseData={recieveExpenseData}></ExpenseForm>
    );
}
export default NewExpense;