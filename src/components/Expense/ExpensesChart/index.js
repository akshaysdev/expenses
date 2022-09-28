import Chart from '../../Charts/Chart';

import { monthsLabel } from '../../../constants';

const ExpensesChart = (props) => {
  const chartPoints = monthsLabel.map((month) => {
    return { label: month, value: 0 };
  });

  for (let expense of props.expenses) {
    const currentMonth = expense.date.getMonth();
    chartPoints[currentMonth].value += expense.amount;
  }

  return <Chart points={chartPoints} />;
};

export default ExpensesChart;
