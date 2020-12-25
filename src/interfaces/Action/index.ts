import Transaction from "interfaces/Transaction";
import Type from "./Type";

interface Action {
    type: Type,
    payload: number | string | Transaction
}

export default Action