import React from 'react';
import ExpenseList from './ExpenseList.js'
import ExpenseListFilters from './ExpenseListFilters'

export const ExpenseDashboardPage = () => {
  return (
    <div>
      <ExpenseListFilters />
      <ExpenseList />
    </div>
  );
};

export default ExpenseDashboardPage;