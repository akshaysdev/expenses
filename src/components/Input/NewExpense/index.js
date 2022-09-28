import { useState } from 'react';
import ExpenseForm from '../ExpenseForm';
import './style.css';

const NewExpense = (props) => {
  const [display, setDisplay] = useState(false);

  const saveExpenseData = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random().toString() + Math.random().toString(),
    };
    props.onAddExpenseData(expenseData);
  };

  const displayExpenseFormHandler = () => {
    setDisplay((prevDisplay) => !prevDisplay);
  };

  return (
    <div className="new-expense">
      {display && (
        <ExpenseForm onExpenseDisplayHandler={displayExpenseFormHandler} onSaveExpenseData={saveExpenseData} />
      )}
      {!display && (
        <button id="expense-adder" onClick={displayExpenseFormHandler}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
