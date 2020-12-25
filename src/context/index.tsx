import Type from 'interfaces/Action/Type';
import TransactionType from 'interfaces/Transaction/Type';
import Context from 'interfaces/Context';
import State from 'interfaces/State';
import Transaction from 'interfaces/Transaction';
import React, { useReducer, createContext } from 'react';
import reducer from './reducer';

const initialState:State = {transactions: JSON.parse(localStorage.getItem('transactions') ?? "[]")};

export const ExpenseTrackerContext = createContext({} as Context);

export const Provider: React.FC = ({ children }) => {
    const [state , dispatch] = useReducer(reducer, initialState)
    
    // Action creators
    const deleteTransaction = (id: number | string) => dispatch({ type: Type.DELETE_TRANSACTION, payload: id as (number | string) });
    const addTransaction = (transaction: Transaction) => dispatch({ type: Type.ADD_TRANSACTION, payload: transaction });

    const balance = state.transactions.reduce((acc, currVal) => {
        if(currVal.type === TransactionType.Income)
            acc += currVal.amount;
        else 
            acc -= currVal.amount;
        return acc;
    }, 0);

    return (
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction, addTransaction, state, balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}