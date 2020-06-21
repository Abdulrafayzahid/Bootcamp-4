
import React,{useContext} from 'react';

import {GlobalContext} from '../context/GlobalState'

const Transaction = ({trans}) => {

    const {deleteTransaction} = useContext(GlobalContext);
    const sign = trans.amount > 0 ? '+' : '-';

    return ( 
           <li className={`${trans.amount < 0 ? 'negative-value' : 'positive-value'}`}> 
                <button className="btn-del" onClick={() => deleteTransaction(trans.id)}>-</button> 
                <p>{trans.description}</p>
                <span>{sign + Math.abs(trans.amount)}</span>
            </li>
     );
}
 
export default Transaction;