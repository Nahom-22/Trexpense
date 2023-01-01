import React, { useContext, useState } from "react";
import { expenseCtx } from "../../store/expense-context";
import Button from "../UI/button/Button";
import NewForm from "./form/NewForm";

import './newExpense.css'


function NewExpense() {
  const [add, setAdd] = useState(false);
  const ctxExp = useContext(expenseCtx);
  const handleClick = (e) => {
    setAdd(!add);
  };
  const getItem = (value) => {
    const newExpense = {
      ...value,
      id: Math.floor(Math.random() * 20),
    };
    ctxExp.onAddExpense(newExpense);
  };
  return (
    <React.Fragment>
      <div className="add-expense-container">
        <div className="add-btn-expense">
          <Button
            className="add-btn"
            name="Add Expense"
            onClick={handleClick}
          />
        </div>
      </div>
      {add && (
        <div className="new-expense-container">
          <div className="new-expense-content">
            <NewForm onGetItem={getItem} onHandleClick={handleClick} />
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default NewExpense;
