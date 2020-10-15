import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses'; 
import selectExpensesTotal from '../../Selectors/expenses-total';

// test('should render test item from expenses', () => {
//     const wrapper = shallow(<ExpenseListItem {...expenses[1]} />);
//     expect(wrapper).toMatchSnapshot();
// });

test('should return 0 from expenses total', () => {
    const total = selectExpensesTotal([]);
    expect(total).toBe(0);
});

test('should return total for one expense', () => {
    const total = selectExpensesTotal([expenses[0]]);
    expect(total).toBe(195);
});

test('should return total for multiple expense', () => {
    const total = selectExpensesTotal(expenses);
    expect(total).toBe(530195);
});