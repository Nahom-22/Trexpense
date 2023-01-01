import React, { useReducer } from "react";

import { expenses as expensesData } from "../assets/data/DummyData.js";

export const expenseCtx = React.createContext({
  onAddExpense: () => {},
  expenses: [],
});

const handleExpense = (state, action) => {
  if (action.type === "ADD_EXPENSE") {
    let updatedItems;
    updatedItems = state.expenses
      .map((expense) => expense)
      .concat(action.value);
    return {
      expenses: updatedItems,
    };
  } else {
    return {
      expenses: state,
    };
  }
};

const ExpenseContextProvider = (props) => {
  const expenseLists = expensesData;
  const [items, dispatchAction] = useReducer(handleExpense, {
    expenses: [...expenseLists],
  });

  const addExpense = (expense) => {
    console.log(expense);
    dispatchAction({ type: "ADD_EXPENSE", value: expense });
  };
  console.log(items.expenses);

  return (
    <React.Fragment>
      <expenseCtx.Provider
        value={{
          onAddExpense: addExpense,
          expenses: items.expenses,
        }}
      >
        {props.children}
      </expenseCtx.Provider>
    </React.Fragment>
  );
};

export default ExpenseContextProvider;
