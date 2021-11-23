import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const formSubmitHandler =(event) => {
        event.preventDefault(); // to stop the reloading of page on form submissison

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        //to make the input values default after form submitting
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                    type="text"
                    value={enteredTitle} //Two Way Binding to make the input blank after form submitting
                    onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                    type="number" 
                    min='0.01' 
                    step='0.01'
                    value={enteredAmount} //Two Way Binding to make the input blank after form submitting
                    onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                    type="date" 
                    min="2021-01-01" 
                    max="2023-12-31"
                    value={enteredDate} //Two Way Binding to make the input blank after form submitting
                    onChange={dateChangeHandler} />
                </div>
            </div>
            <button type="button" onClick = {props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </form>
    );
}

export default ExpenseForm;