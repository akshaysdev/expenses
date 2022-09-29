import './style.css';

import ExpenseItem from '../ExpenseItem';

const ExpensesList = (props) => {
  if (!props.expenses.length) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          id={item.id}
          title={item.title}
          date={item.date}
          amount={item.amount}
          onClickDeleteExpenseData={props.onClickDeleteExpenseData}
          onEditExpenseData={props.onEditExpenseData}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
