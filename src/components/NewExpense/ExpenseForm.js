import React from 'react';
import './ExpenseForm.scss';
import { Row, Col } from 'antd';

const ExpenseForm = (props) => {
    const style = { background: '#0092ff', padding: '8px 0' };

    return(
        <div className="expense-input">
            <div className="expense-input__header"> Options Group Autocomplete </div>
            <div className="expense-input__body">
                <form>
                    <div className="new-expense__controls">
                        <div className="new-expense__control">
                            <label className="new-expense__control__title">Title</label>
                            <input type="text"></input>
                        </div>
                        <div className="new-expense__control">
                            <label className="new-expense__control__title">Amount</label>
                            <input type="number" min="0.01" step="0.01"></input>
                        </div>
                        <div className="new-expense__control">
                            <label className="new-expense__control__title">Date</label>
                            <input type="date" min="2021-1-1" max="2022-2-1"></input>
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