import { useState } from 'react';
import { expenseFormType } from '../../../constants';

import './style.css';

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleChange = (expenseType, event) => {
    switch (expenseType) {
      case expenseFormType.TITLE:
        setTitle(event.target.value);
        break;
      case expenseFormType.AMOUNT:
        setAmount(event.target.value);
        break;
      case expenseFormType.DATE:
        setDate(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const expense = {
      title,
      amount: +amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(expense);

    setTitle('');
    setAmount('');
    setDate('');

    props.onExpenseDisplayHandler();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={(event) => handleChange(expenseFormType.TITLE, event)} type="text" value={title} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input onChange={(event) => handleChange(expenseFormType.AMOUNT, event)} type="number" value={amount} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={(event) => handleChange(expenseFormType.DATE, event)}
            type="date"
            value={date}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button id="expense-adder" onClick={props.onExpenseDisplayHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
