import React from 'react';
import ExpenseItem from './ExpenseItem';

import './ExpensesList.scss'
const ExpensesList = (props) => {

    if(props.items.length === 0) {
        return <h2>Not Found, please select again</h2>  
    }
    return (
        <div className='cards'>
            {
                props.items.map(expense => (
                    <ExpenseItem 
                        key={expense.id} 
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date}
                    />
                ))
            }  
        </div>
    );
}

export default ExpensesList;