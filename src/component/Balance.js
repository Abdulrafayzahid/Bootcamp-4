import React,{useContext} from 'react';

import {GlobalContext} from '../context/GlobalState'

const Balance = () => {

    const {transaction} = useContext(GlobalContext)

    const amount = transaction.length && transaction.map(trans => trans.amount)

    const totalAmount = transaction.length && amount.reduce((acc, curr) => (acc += curr))

    return ( 
        <div>
            <h2>Current Balance :</h2>
            <h2 className="Balance">${totalAmount}</h2>
        </div>
     );
}
 
export default Balance;