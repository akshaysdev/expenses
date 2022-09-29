import { useState } from 'react';

import './style.css';
import { expenseFormType } from '../../../constants';
import { getDateFormat } from '../../../utils';

const ExpenseModal = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);
  const [date, setDate] = useState(getDateFormat(props.date));

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
      id: props.id,
      title,
      amount: +amount,
      date: new Date(date),
    };

    setTitle('');
    setAmount('');
    setDate('');

    props.onClickEditExpenseData();
    props.onEditExpenseData(expense);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="expense-modal">
        <div className="expense-modal__controls">
          <div className="expense-modal__control">
            <label>Title</label>
            <input onChange={(event) => handleChange(expenseFormType.TITLE, event)} type="text" value={title} />
          </div>
          <div className="expense-modal__control">
            <label>Amount</label>
            <input onChange={(event) => handleChange(expenseFormType.AMOUNT, event)} type="number" value={amount} />
          </div>
          <div className="expense-modal__control">
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
        <div className="expense-modal__actions">
          <button onClick={props.onClickEditExpenseData}>Cancel</button>
          <button type="submit">Edit Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseModal;
