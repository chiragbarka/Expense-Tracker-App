import React, {useState} from 'react';
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  
  const [filteredYear, setFilteredYear] = useState('2020')

  const dropdownChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  //to filter the expenses based on the year selected
  const filteredExpenses = props.items.filter( expense => {
    return expense.date.getFullYear().toString() === filteredYear;
    //return true if selected year is matched.
  })

  return (
    <li>
      <div>
        <Card className="expenses">
        <ExpensesFilter selectedYear = {filteredYear} onChangeFilter = {dropdownChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}/>
        </Card>
      </div>
    </li>
  );
}

export default Expenses;
