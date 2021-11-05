import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expense/Expenses';
import FakeCardData from './context/FakeCardData';
import NewExpense from './components/NewExpense/NewExpense';
import Chart from './components/Chart/Chart';

const DUMMY_EXPENSES = [
  { id: 'e1', title:'ALIBABA [2020]', amount: 94.12, date: new Date(2020, 7, 14) },
  { id: 'e2', title:'AMAZON [2020]', amount: 94.12, date: new Date(2020, 7, 15) },
  { id: 'e3', title:'TIKI [2021]', amount: 94.12, date: new Date(2021, 9, 2)},
  { id: 'e4', title:'LAZADA [2021]', amount: 94.12, date: new Date(2021, 9, 2)},
  { id: 'e5', title:'SHOPPE [2022]', amount: 94.12, date: new Date(2022, 9, 2)},
]

const App = () =>{
  console.log("App.js run");
  const  [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const ReciveExpense = (expense) =>{
    setExpenses((prevExpenses) =>{
      return ([expense, ...prevExpenses]);
    });
    // console.log('Data NewExpense -> App.js: ', expense, ...expenses);
  }

  return (
    <div className="App">
      <FakeCardData>
          <NewExpense onReciveExpense={ReciveExpense}></NewExpense>
          <Expenses items={expenses}></Expenses>
          <Chart></Chart>
      </FakeCardData>
    </div>
  );
}

export default App;
