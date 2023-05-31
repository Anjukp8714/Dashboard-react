import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: ["Stationary Purchase", "Electricity Bill", "Telephone Bill","Miscellaneous", "Flower"],
  datasets: [
    {
      label: '# of Votes',
      data: [100, 150, 150, 450, 100],
      backgroundColor: [
        '#9966ff',
        '#36a2eb',
        '#ff9f40',
        '#715d20',
        '#c9cbcf',
      ],
      borderColor: [
        '#9966ff',
        '#36a2eb',
        '#ff9f40',
        '#715d20',
        '#c9cbcf',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  cutoutPercentage: 50,
  rotation: -90,
  circumference: 180,
};

const DonutChart = () => {
  return (
    <div style={{ width: '500px', height: '300px' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DonutChart;
