import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, history, wrapper, startRemoveExpense;

beforeEach(() => {
    editExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<EditExpensePage 
         editExpense={editExpense} 
         history={history} 
         startRemoveExpense={startRemoveExpense}
         expense={expenses[2]}
    />);
});

test('should render Edit Expense Page', () => {
    expect(wrapper).toMatchSnapshot();
});


test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expenses[2].id});
});
