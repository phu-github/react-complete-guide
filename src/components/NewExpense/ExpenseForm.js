import React from 'react';
import './ExpenseForm.scss';
import { Row, Col } from 'antd';
import { useState } from 'react/cjs/react.development';

const ExpenseForm = (props) => {
    const style = { background: '#0092ff', padding: '8px 0' };
    const [enterTitle, setEnterTitle] = useState('');
    const [enterAmount, setEnterAmount] = useState('');
    const [enterDate, setEnterDate] =useState('');
    const [userInput, setUserInput] = useState({
        enterTitle: '',
        enterAmount: '',
        enterDate: ''
    });

    const handleTitleChange = (event) =>{
        setEnterTitle(event.target.value);
        console.log(enterTitle);
        // setUserInput({
        //     ...userInput,
        //     enterTitle: event.target.value
        // });

        // setUserInput((prevState)=>{
        //     console.log("đây là trạng thái trước đó", prevState);
        //     return{...prevState, enterTitle: event.target.value}
        // });
    }
    const handleAmountChange = (event) =>{
        setEnterAmount(event.target.value);
        console.log(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enterAmount: event.target.value
        // });
        // setUserInput((prevState)=>{
        //     return{...prevState, enterAmount: event.target.value}
        // });
    }
    const handleDateChange = (event) =>{
        setEnterDate(event.target.value);
        console.log(enterDate);
        // setUserInput({
        //     ...userInput,
        //     enterDate: event.target.value
        // });
        // setUserInput((prevState)=>{
        //     return{...prevState, enterDate: event.target.value}
        // });
    }
    const handleExpenseSubmit = (e) =>{
        e.preventDefault();
    }
    return(
        <div className="expense-input">
            <div className="expense-input__header"> Options Group Autocomplete </div>
            <div className="expense-input__body">
                <form onSubmit={handleExpenseSubmit}>
                    <div className="new-expense__controls">
                        <div className="new-expense__control">
                            <label className="new-expense__control__title">Title</label>
                            <input type="text" onChange={handleTitleChange}></input>
                        </div>
                        <div className="new-expense__control">
                            <label className="new-expense__control__title">Amount</label>
                            <input type="number" min="0.01" step="0.01" onChange={handleAmountChange}></input>
                        </div>
                        <div className="new-expense__control">
                            <label className="new-expense__control__title">Date</label>
                            <input type="date" min="2021-1-1" max="2022-2-1" onChange={handleDateChange}></input>
                        </div>
                    </div>
                    <div className="new-expense__btn">
                        <button type="submit"> + Expense</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default ExpenseForm;