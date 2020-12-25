import Action from "interfaces/Action";
import ActionType from "interfaces/Action/Type";
import State from "interfaces/State";
import Transaction from "interfaces/Transaction";

//Reducer is a function that takes on the old state and an action and return the new state
// Para funcionar, precisa necessariamente retornar um novo objeto.
//Caso retorne a mesma referencia, mesmo que alterado. Não causa o reload a pagina.
const reducer = (state: State, action: Action): State => {
    let newState;
    switch (action.type) {
        case ActionType.DELETE_TRANSACTION:
            newState = {transactions: state.transactions?.filter((s) => s.id !== action.payload)}
            localStorage.setItem('transactions', JSON.stringify(newState.transactions));
            return newState;
        case ActionType.ADD_TRANSACTION:
            newState= {transactions: [...(state.transactions ?? []), (action.payload as Transaction)]};
            localStorage.setItem('transactions', JSON.stringify(newState.transactions));
            return newState;
        default:
            return state;
    }
}

export default reducer;