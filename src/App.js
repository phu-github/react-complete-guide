import { useState } from 'react';
import './App.css';
import ExpenseItem from './components/Expense/ExpenseItem';
import FakeCardData from './context/FakeCardData';

function App() {
  const expense = [
    { id: 'e1', title:'toilet Paper', amount: 94.12, date: new Date(2020, 7, 14) },
    { id: 'e2', title:'New TV', amount: 94.12, date: new Date(2020, 7, 15) },
    { id: 'e3', title:'Talk Show', amount: 94.12, date: new Date(2020, 9, 2)},
    { id: 'e4', title:'Talk Show 1', amount: 94.12, date: new Date(2020, 9, 2)},
  ]
  return (
    <div className="App">
      <FakeCardData>
        <div className='cards'>
          <ExpenseItem title={expense[0].title} amount={expense[0].amount} date={expense[0].date}></ExpenseItem>
          <ExpenseItem title={expense[1].title} amount={expense[1].amount} date={expense[1].date}></ExpenseItem>
          <ExpenseItem title={expense[2].title} amount={expense[2].amount} date={expense[2].date}></ExpenseItem>
          <ExpenseItem title={expense[3].title} amount={expense[3].amount} date={expense[3].date}></ExpenseItem> 
        </div>
      </FakeCardData>
    </div>
  );
}

export default App;
