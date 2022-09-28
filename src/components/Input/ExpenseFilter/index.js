import { datesForFilter } from '../../../constants';
import './style.css';

const ExpensesFilter = (props) => {
  const handleDropDownChange = (event) => {
    props.onFilterChange(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={handleDropDownChange}>
          {datesForFilter.map((date, idx) => (
            <option key={idx} value={date}>
              {date}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
