import React from 'react';
import TimeChart from './TimeChart';

const StatusBox = () => {
  const chartData = [
    { status: 'PENDING', value: '$17.33', time: 'Today - 13:20' },
    { status: 'SHIPPED', value: '$22.50', time: 'Today - 11:32' },
    { status: 'SHIPPED', value: '$9.99', time: 'Today - 11:20' },
    { status: 'PENDING', value: '$31.75', time: 'Today - 10:20' },
    { status: 'PENDING', value: '$14.99', time: 'Today - 7:30' },
    { status: 'DELIVERD', value: '$14.99', time: 'monday - 17:30' }
  ];

  return (
    <div className='statusbar'>
      <p className='statushead'>Dummy Content</p>
      {chartData.map((chart, index) => (
        <TimeChart
          key={index}
          status={chart.status}
          value={chart.value}
          time={chart.time}
        />
      ))}
    </div>
  );
};

export default StatusBox;
