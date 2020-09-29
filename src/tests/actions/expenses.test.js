import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({id:  '123abcd'});
  expect(action).toEqual({
      type: 'REMOVE_EXPENSE',
      id: '123abcd'
  })
});


test('should setup edit expense objet', () => {
  const action = editExpense('abcdefg', { note: 'updated note' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abcdefg',
    updates: {
      note: 'updated note'
    }
  })
});

test('should set up AddExpense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 1095.00,
    createdAt: 10000,
    note: 'This was last months rent'
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
});

test('should set up AddExpense action object with default', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  })
});