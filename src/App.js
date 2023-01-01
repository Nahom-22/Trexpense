import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

import './index.css'

function App() {
  return (
    <div className="app-container">
      <h2 id="app-title">Expense Tracker</h2>
      <div className="App">
        <NewExpense />
        <Expenses />
      </div>
    </div>
  );
}

export default App;
