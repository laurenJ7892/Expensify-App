import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = () => (
    <header>
      <h1>Expensify App</h1>
      <NavLink activeClassName="is-active" to="/">Home</NavLink>
      <NavLink activeClassName="is-active" to="/create">Create Expense</NavLink>
      <NavLink activeClassName="is-active" to="/edit">Edit Expense</NavLink>
      <NavLink activeClassName="is-active" to="/help">Help</NavLink>
    </header>
);

export default Header;