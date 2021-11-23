import React from 'react';
import ExpenseItem from './ExpenseItems';
import './ExpensesList.css';


const ExpensesList = props => {

    //if no data is found in a filteredyear
    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback">Found No Expense.</h2>
    }
    
    return(
        <ul className="expenses-list">
        {props.items.map(expense => //to get dynamic data that is any number of expense items can be displayed now
        <ExpenseItem 
            key={expense.id} //so that new div will be created and it will not replace the existing one
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date}/>
        )}
        </ul>
    )
} 

export default ExpensesList;