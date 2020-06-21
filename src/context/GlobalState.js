import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

// Create initial state

const initialState = {
    transaction: [
        {
            id: 1,
            description: "Income 1",
            amount: 1000
        },
        {
            id: 2,
            description: "Expense 1",
            amount: -500
        },
        {
            id: 3,
            description: "Income 2",
            amount: 4000
        },
        {
            id: 4,
            description: "Expense 1",
            amount: -2000
        }
    ]
}

// Create global context
export const GlobalContext = createContext(initialState);

// Create a global provider

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Action
    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        }) 
    }

    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        }) 
    }

    return (
        <GlobalContext.Provider value={
            {
                transaction: state.transaction,
                deleteTransaction,
                addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
} 

