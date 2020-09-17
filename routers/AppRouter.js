import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../src/components/Header'
import ExpenseDashboardPage from '../src/components/ExpenseDashboard'
import AddExpensePage from '../src/components/AddExpensePage'
import EditExpensePage from '../src/components/EditExpensePage'
import HelpPage from '../src/components/Help'
import NotFoundPage from '../src/components/NotFound'

const AppRouter = () => (
    <BrowserRouter>
      <div>
      <Header/>
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
      </div>
  </BrowserRouter>
);



export default AppRouter;