import Action from "interfaces/Action";
import ActionType from "interfaces/Action/Type";
import State from "interfaces/State";
import Transaction from "interfaces/Transaction";

//Reducer is a function that takes on the old state and an action and return the new state
// Para funcionar, precisa necessariamente retornar um novo objeto.
//Caso retorne a mesma referencia, mesmo que alterado. Não causa o reload a pagina.
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case ActionType.DELETE_TRANSACTION:
            return {transactions: state.transactions?.filter((s) => s.id !== action.payload)}
        case ActionType.ADD_TRANSACTION:
            return {transactions: [...(state.transactions ?? []), (action.payload as Transaction)]};
        default:
            return state;
    }
}

export default reducer;