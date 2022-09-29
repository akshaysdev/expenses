import { useState } from 'react';
import Card from '../../UI/Card';
import ExpenseModal from '../../UI/ExpenseModal';
import ExpenseDate from '../ExpenseDate';
import './style.css';

const ExpenseItem = (props) => {
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit((prevState) => !prevState);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs. {props.amount}</div>
        <button className="expense-item__edit" id={props.id} onClick={handleEdit}>
          Edit
        </button>
        <button className="expense-item__delete" id={props.id} onClick={props.onClickDeleteExpenseData}>
          Delete
        </button>
      </div>
      {edit && (
        <ExpenseModal
          title={props.title}
          date={props.date}
          amount={props.amount}
          id={props.id}
          onClickEditExpenseData={handleEdit}
          onEditExpenseData={props.onEditExpenseData}
        />
      )}
    </Card>
  );
};

export default ExpenseItem;
