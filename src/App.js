import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expense/Expenses';
import FakeCardData from './context/FakeCardData';
import NewExpense from './components/NewExpense/NewExpense';
import Chart from './components/Chart/Chart';

const DUMMY_EXPENSES = [
  { id: 'e1', title:'ALIBABA [2020]', amount: 0.01, date: new Date(2020, 1, 14) },
  { id: 'e2', title:'AMAZON [2020]', amount: 0.01, date: new Date(2020, 1, 15) },
  { id: 'e3', title:'ALIBABA [2020]', amount: 0.01, date: new Date(2020, 1, 14) },
  { id: 'e4', title:'AMAZON [2020]', amount: 0.01, date: new Date(2020, 2, 15) },
  { id: 'e5', title:'ALIBABA [2020]', amount: 0.01, date: new Date(2020, 3, 14) },
  { id: 'e6', title:'AMAZON [2020]', amount: 0.01, date: new Date(2020, 4, 15) },
  { id: 'e7', title:'ALIBABA [2020]', amount: 0.01, date: new Date(2020, 11, 14) },
  { id: 'e8', title:'AMAZON [2020]', amount: 0.01, date: new Date(2020, 11, 15) },
  { id: 'e9', title:'TIKI [2021]', amount:0.01, date: new Date(2021, 1, 2)},
  { id: 'e10', title:'LAZADA [2021]', amount: 0.01, date: new Date(2021, 2, 2)},
  { id: 'e11', title:'SHOPPE [2022]', amount: 0.01, date: new Date(2022, 2, 2)},
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
      </FakeCardData>
    </div>
  );
}

export default App;
