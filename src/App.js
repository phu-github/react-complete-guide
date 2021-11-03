import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expense/Expenses';
import FakeCardData from './context/FakeCardData';
import NewExpense from './components/NewExpense/NewExpense';

const App = () =>{
  const expense = [
    { id: 'e1', title:'toilet Paper', amount: 94.12, date: new Date(2020, 7, 14) },
    { id: 'e2', title:'New TV', amount: 94.12, date: new Date(2020, 7, 15) },
    { id: 'e3', title:'Talk Show', amount: 94.12, date: new Date(2020, 9, 2)},
    { id: 'e4', title:'Talk Show 1', amount: 94.12, date: new Date(2020, 9, 2)},
  ]
  console.log("run app.js");
  return (
    <div className="App">
      <FakeCardData>
          <NewExpense></NewExpense>
          <Expenses expense={expense}></Expenses>
      </FakeCardData>
    </div>
  );
}

export default App;
