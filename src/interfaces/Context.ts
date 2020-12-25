import State from "./State";
import Transaction from "./Transaction";

interface Context{
    state?: State
    deleteTransaction?: (id: number) => void,
    addTransaction?: (transaction: Transaction) => void
}

export default Context;