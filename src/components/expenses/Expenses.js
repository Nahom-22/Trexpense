import React, { useContext, useState } from "react";
import { expenseCtx } from "../../store/expense-context.js";
import moment from "moment";
import Filter from "../filter/Filter.js";

import ExpenseItem from "./expenseItem/ExpenseItem.js";

import './expenses.css'

const Expenses = () => {
  const ctxExp = useContext(expenseCtx);
  const [yearValue, setYearValue]=useState(2022)
  const getYear=(year)=>{
      setYearValue(year)
  }
  const filteredExpenses=ctxExp.expenses.filter(expense=>moment(expense.date).format('YYYY').includes(yearValue))
  return (
    <div className="expenses-container">
      <div className="expenses-content">
        <div className="expenses-top">
          <Filter onGetYear={getYear}/>
        </div>
        <ul className="expenses-list">
          {filteredExpenses.map((expense) => (
            <li className="expense-item" key={expense.id}>
              <ExpenseItem
                name={expense.name}
                date={expense.date}
                price={expense.price}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Expenses;
