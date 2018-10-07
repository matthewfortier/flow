import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import thunk from 'redux-thunk';

//
// Initial State
//

const initialState = {
    flow: 3520,
    expenses: []
}

//
// Reducer
//

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_EXPENSE":
            return { ...state, expenses: [...state.expenses, action.value] };
        default: return state;
    }
}

//
// Store
//

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export { store };

const addExpense = (expense) => {
    return {
        type: "ADD_EXPENSE",
        value: expense,
    };
}

export { addExpense };
