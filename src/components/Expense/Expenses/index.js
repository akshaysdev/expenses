import { useState } from 'react';
import ExpensesFilter from '../../Input/ExpenseFilter';
import Card from '../../UI/Card';
import ExpensesChart from '../ExpensesChart';
import ExpensesList from '../ExpensesList';
import ExpensesTotal from '../ExpensesTotal';
import './style.css';

const Expenses = (props) => {
  const [year, setYear] = useState('All');

  const handleDropDownChange = (filteredYear) => {
    setYear(filteredYear);
  };

  const filteredExpenses =
    year === 'All'
      ? props.expenses
      : props.expenses.filter((expense) => expense.date.getFullYear().toString() === year);

  return (
    <Card className="expenses">
      <ExpensesFilter onFilterChange={handleDropDownChange} />
      <ExpensesTotal expenses={filteredExpenses} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
