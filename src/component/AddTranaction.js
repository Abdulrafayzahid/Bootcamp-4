import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState'

const AddTransaction = () => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault()
        if(!description.length && !amount.length) {
        

        alert("Fill the the required fields")
        }else{
            const newTransaction = {
                id : Math.floor(Math.random() * 100000),
                description,
                amount: +amount
            }
            addTransaction(newTransaction)
        }

        
    }

    return ( 
        <div>
            <h3>Add a new transacrion</h3>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="description">Description</label>
                    <input 
                        type="text" 
                        id="description" 
                        required
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="amount">Transaction amount</label>
                    <input 
                        type="number" 
                        id="amount" 
                        required
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                
                <button>Add transaction</button>
            </form>
        </div>
     );
}
 
export default AddTransaction;