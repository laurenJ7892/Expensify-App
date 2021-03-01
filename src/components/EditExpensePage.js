import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './expenseForm';
import {startEditExpense, startRemoveExpense} from '../actions/expenses';
import ConfirmationModal from './confirmationModal';


export class EditExpensePage extends React.Component {
    state = {
      showModal: false
    };

  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  onClick = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
    this.setState({ showModal: false });
  };

  showModal = () => {
    this.setState({ showModal: true, calendarFocused: false });
  }

  closeModal = () => {
    this.setState({ showModal: false, calendarFocused: false });
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <ConfirmationModal
          showModal={this.state.showModal}
          closeModal={this.closeModal}
          deleteExpense={this.onClick}
          />
          {this.state.showModal && <div className="modal_overlay"></div>}
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
            <ExpenseForm
              expense={this.props.expense}
              onSubmit={this.onSubmit}/>
              <button className="button button--secondary" onClick={this.showModal}>Remove Expense</button>
          </div>
        </div>
    </div>
    );
  }
};

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id )
  };
};

  export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);