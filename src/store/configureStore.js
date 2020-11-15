import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import filtersReducer from '../Reducers/filters';
import expensesReducer from '../Reducers/expenses';
import thunk from 'redux-thunk';


// Store

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
  return store;
};