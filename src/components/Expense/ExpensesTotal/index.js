import './style.css';

import Card from '../../UI/Card';

const ExpensesTotal = (props) => {
  const total = props.expenses
    .reduce((acc, curr) => {
      acc += curr.amount;
      return acc;
    }, 0)
    .toFixed(2);

  return (
    <Card className="expense-total">
      <div className="expense-total__heading">
        <h1>TOTAL</h1>
        <div className="expense-total__price">Rs. {total}</div>
      </div>
    </Card>
  );
};

export default ExpensesTotal;
