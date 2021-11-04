import { useState } from 'react/cjs/react.development';
import ExpenseItem from './ExpenseItem';
import './Expenses.scss';
import ExpensesFilter from './ExpensesFilter';
const Expenses = (props) => {
    console.log("[2] Expenses.js run");
    const [filteredYear, setFilteredYear] = useState('2021');
    const RecieveExpenseFilter = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    return(
        <>
            <ExpensesFilter selected={filteredYear}  onRecieveExpenseFilter={RecieveExpenseFilter}></ExpensesFilter>
            <div className='cards'>
                {props.items.map(expense => (
                    <ExpenseItem 
                        key={expense.id} 
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date}
                    />
                ))}
            </div>
        </>
    );
};
export default Expenses;