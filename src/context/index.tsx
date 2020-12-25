import Type from 'interfaces/Action/Type';
import Context from 'interfaces/Context';
import State from 'interfaces/State';
import Transaction from 'interfaces/Transaction';
import React, { useReducer, createContext } from 'react';
import reducer from './reducer';

const initialState = {} as State;

export const ExpenseTrackerContext = createContext({} as Context);

export const Provider: React.FC = ({ children }) => {
    const [state , dispatch] = useReducer(reducer, initialState)
    
    // Action creators
    const deleteTransaction = (id: number) => dispatch({ type: Type.DELETE_TRANSACTION, payload: id });
    const addTransaction = (transaction: Transaction) => dispatch({ type: Type.ADD_TRANSACTION, payload: transaction });

    return (
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction, addTransaction, state
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}