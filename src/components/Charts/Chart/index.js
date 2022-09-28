import './style.css';

import ChartBar from '../ChartBar';

const Chart = (props) => {
  const points = props.points.map((point) => {
    return point.value;
  });
  const maximumValue = Math.max(...points);

  return (
    <div className="chart">
      {props.points.map((point) => (
        <ChartBar key={point.label} value={point.value} maxValue={maximumValue} label={point.label} />
      ))}
    </div>
  );
};

export default Chart;
