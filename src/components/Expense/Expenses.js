import { useState } from 'react/cjs/react.development';
import './Expenses.scss';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
const Expenses = (props) => {
    console.log("[2] Expenses.js run");
    const [filteredYear, setFilteredYear] = useState('2021');
    const RecieveExpenseFilter = (selectedYear) => {
        setFilteredYear(selectedYear);
        
    }
    const fiteredExpenses = props.items.filter((expense)=>{
        return expense.date.getFullYear() == filteredYear;
    });

    return(
        <>
            <ExpensesFilter 
                selected={filteredYear}  
                onRecieveExpenseFilter={RecieveExpenseFilter}>  
            </ExpensesFilter>
            <ExpensesList items = {fiteredExpenses} />
        </>
    );
};
export default Expenses;