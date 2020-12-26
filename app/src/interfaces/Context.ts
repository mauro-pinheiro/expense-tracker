import State from "./State";
import Transaction from "./Transaction";

interface Context{
    state: State,
    balance: number,
    deleteTransaction: (id: number | string) => void,
    addTransaction: (transaction: Transaction) => void
}

export default Context;