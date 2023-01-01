import React from "react";

import Date from "../../date/Date";

import './expenseItem.css'

function ExpenseItem(props) {
  return (
    <div className="expense-item-container">
      <div className="expense-item-content">
        <div className="expense-left">
          <Date date={props.date} />
        </div>
        <div className="expense-right">
          <div className="expense-right-left">
            <h4>{props.name}</h4>
          </div>
          <div className="expense-right-right">
            <h4>{`$${props.price}`}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
