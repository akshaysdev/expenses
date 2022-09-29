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

  const deleteExpenseData = (event) => {
    const expenseId = event.target.id;
    setExpenses((prevExpenses) => {
      prevExpenses = prevExpenses.filter((currExpense) => currExpense.id !== expenseId);
      return [...prevExpenses];
    });
  };

  const editExpenseData = (updateExpense) => {
    const updatedExpenses = expenses.map((expense) => {
      if (expense.id === updateExpense.id) {
        expense = { ...updateExpense };
      }
      return expense;
    });
    setExpenses(updatedExpenses);
  };

  return (
    <div className="App">
      <NewExpense onAddExpenseData={addExpenseData} />
      <Expenses expenses={expenses} onEditExpenseData={editExpenseData} onClickDeleteExpenseData={deleteExpenseData} />
    </div>
  );
};

export default App;
