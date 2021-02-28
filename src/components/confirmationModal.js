import React from 'react';


export default class ConfirmationModal extends React.Component {  
  render() {
    if (this.props.showModal) {
      return (
        <div className="confirmation_modal">
          <header className="confirmation_header">
            <h5>Delete Expense</h5>
          </header>
          <div className="confirmation_content">
            <p>Are you sure you want to delete this expense?</p>
            <button onClick={this.props.deleteExpense}>Submit</button>
            <button onClick={this.props.closeModal}>Cancel</button>
          </div>
        </div>
      );
    } 
    return null;
  };
};
