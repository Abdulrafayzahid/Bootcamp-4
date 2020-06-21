import React,{useContext} from 'react';

import {GlobalContext} from '../context/GlobalState'

import Transaction from './Transaction'

const TransactionHistory = () => {

    const {transaction} = useContext(GlobalContext);
    

    return ( 
        <div>
        <h3>Transaction History</h3>
        <ul className="transaction-history-list">
        {transaction.map((trans) => {
            
            return( 
                <Transaction trans={trans} key={trans.id} /> )
            })}
          
        </ul>
        </div>
     );
}
 
export default TransactionHistory;