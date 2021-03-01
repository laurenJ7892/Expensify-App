import React from 'react';


export default class ConfirmationModal extends React.Component {  
  render() {
    if (this.props.showModal) {
      return (
        <div className="confirmation_modal">
          <header className="confirmation_header">
            <h5>Confirm Delete Expense</h5>
          </header>
          <div className="confirmation_content">
            <h5>Are you sure you want to delete this expense?</h5>
            <button className="confirmation_submit_button" onClick={this.props.deleteExpense}>Submit</button>
            <button className="confirmation_button" onClick={this.props.closeModal}>Cancel</button>
          </div>
        </div>
      );
    } 
    return null;
  };
};