import expensesReducer from '../../Reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should have default state as empty array', ()=> {
  const state = expensesReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense when an ID is passed in', ()=> {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if ID not found', ()=> {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expenses', () => {
    const expense = {
        id: 12,
        description: 'Testing',
        note: '',
        amount: 8888,
        createdAt: moment(0).valueOf()
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
   const updatedNote = 'testing';
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates: {
            note: updatedNote
          }
    }
    const state = expensesReducer(expenses, action);
    expect(state[2].note).toBe(updatedNote);
});

test('should edit an expense', () => {
    const updatedNote = 'testing';
     const action = {
         type: 'EDIT_EXPENSE',
         id: '-1',
         updates: {
             note: updatedNote
           }
     }
     const state = expensesReducer(expenses, action);
     expect(state).toEqual(expenses);
 });