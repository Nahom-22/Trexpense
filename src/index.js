import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ExpenseContextProvider from "./store/expense-context";

import './index.css'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ExpenseContextProvider>
      <App />
    </ExpenseContextProvider>
  </React.StrictMode>
);
