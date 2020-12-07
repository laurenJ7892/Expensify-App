import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../src/components/Header';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route {...rest} component={() => (
    isAuthenticated ? (
      <div>
        <Header />
        <Component {...props} />
      </div>
    ) : (
      <Redirect to="/" />
    )
  )}
  />
);


const mapStatetoProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStatetoProps)(PrivateRoute);