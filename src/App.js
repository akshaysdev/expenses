import { useState } from 'react';
import './App.css';
import Expenses from './components/Expense/Expenses';
import NewExpense from './components/Input/NewExpense';
import { generateDummyExpenses } from './utils';

const DUMMY_EXPENSES = generateDummyExpenses();

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseData = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div className="App">
      <NewExpense onAddExpenseData={addExpenseData} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
