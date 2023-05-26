import React from 'react';
import './TimeChart.css';

const TimeChart = (props) => {
  const { status, value, time } = props;

  return (
    <div className="time-chart">
      <p>Text values</p>
      <p className="chart-status">{status}</p>
    
      <p className="chart-value">{value}</p>
      <p className="chart-time">{time}</p>
    </div>
  );
};

export default TimeChart;
