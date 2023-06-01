import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: ["Donation", "Rent", "Miscellaneous", "Book Sale", "Uniform Sale"],
  datasets: [
    {
      label: '# of Votes',
      data: [250, 200, 350, 200, 300],
      backgroundColor: [
        '#66aa18',
        '#ffcd56',
        '#4bc0c0',
        '#c9cbcf',
        '#715d20',
      ],
      borderColor: [
        '#66aa18',
        '#ffcd56',
        '#4bc0c0',
        '#c9cbcf',
        '#715d20',
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

const HalfDonutChart = () => {
  return (
    <div>
        <p>Income - May 2023</p>
    <div style={{ width: '500px', height: '300px' }}>
      <Doughnut data={data} options={options} />
    </div>
    </div>
  );
};

export default HalfDonutChart;
