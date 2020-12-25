import Transaction from "interfaces/Transaction";
import Type from "./Type";

interface Action {
    type: Type,
    payload: number | Transaction
}

export default Action