import { useState } from 'react';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import FakeCardData from './context/FakeCardData';

function App() {
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
