import { useState } from 'react';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import FakeCardData from './context/FakeCardData';

function App() {
  const expense = [
    { id: 'e1', title:'toilet Paper', amount:94.12, date: new Date(2020, 7, 14) },
    { id: 'e2', title:'New TV', amount:94.12,date: new Date(2020, 7, 15) },
    { id: 'e3', title:'Talk Show', amount:94.12, date: new Date(2020, 9, 2)},
  ]
  aaaaa
  return (
    <div className="App">
      <FakeCardData>
        <div className='cards'>
          <ExpenseItem></ExpenseItem>
          <ExpenseItem></ExpenseItem>
          <ExpenseItem></ExpenseItem>
          <ExpenseItem></ExpenseItem> 
        </div>
      </FakeCardData>
    </div>
  );
}

export default App;
