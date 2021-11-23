import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpenses/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: "Car Insurance",
    amount: 1200,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e2',
    title: "Kitchen Utensils",
    amount: 3000,
    date: new Date(2021, 4, 15),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseDataHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  };

  return (
    <div>
      <NewExpense onAddExpenseData = {addExpenseDataHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
