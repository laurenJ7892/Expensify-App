import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../src/components/ExpenseDashboard'
import AddExpensePage from '../src/components/AddExpensePage'
import EditExpensePage from '../src/components/EditExpensePage'
import NotFoundPage from '../src/components/NotFound'
import LoginPage from '../src/components/LoginPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
      <div>
        <Switch>
          <PublicRoute path="/" component={LoginPage} exact={true}/>
          <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
          <PrivateRoute path="/create" component={AddExpensePage} />
          <PrivateRoute path="/edit/:id" component={EditExpensePage} />
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
  </Router>
);



export default AppRouter;