import React,{useContext} from 'react';

import {GlobalContext} from '../context/GlobalState'

const AccountSummary = () => {
    const {transaction} = useContext(GlobalContext)

    const amount = transaction.map(trans => trans.amount)

    let income = amount.filter(amount => amount > 0) 

    income = income.length ? income.reduce((acc, curr) => (acc += curr)) : income
    
    let expense = amount.filter(amount => amount < 0) 

    expense = expense.length ? expense.reduce((acc, curr) => (acc += curr)) * -1 : expense            
    // const expense = amount.filter(amount => amount < 0) 
    //                 .reduce((acc, curr) => (acc += curr)) * -1

    return ( 
       <div className="account-summary">
            <div>
                <h4>Income</h4>
    <h4 className="value plus">{income > 0 ? "+" : 0}{income}</h4>
            </div>
            <div>
                <h4>Expense</h4>
                <h4 className="value minus">{expense > 0 ? "-" : 0}{expense}</h4>
            </div>
       </div>
     );
}
 
export default AccountSummary;