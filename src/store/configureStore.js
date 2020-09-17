import { createStore, combineReducers } from 'redux';
import filtersReducer from '../Reducers/filters';
import expensesReducer from '../Reducers/expenses';


// Store

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  return store;
};