import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LinearChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const createChart = () => {
      const canvas = document.createElement('canvas');
      canvas.id = 'myChart';
      const chartContainer = document.getElementById('chart-container');
      chartContainer.innerHTML = '';
      chartContainer.appendChild(canvas);

      const data = {
        labels: ['April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March'],
        datasets: [
          {
            label: 'First Bar',
            backgroundColor: '#66aa18',
            borderColor: '#66aa18',
            borderWidth: 1,
            tension:0.4,
            data: [29600, 22650, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            label: 'Second Bar',
            backgroundColor: '#e36b6b',
            borderColor: '#e36b6b',
            borderWidth: 1,
            data: [1050, 950, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
        ],
      };

      const options = {
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            suggestedMax: 30000,
            ticks: {
              stepSize: 10000,
            },
          },
        },
      };

      chartRef.current = new Chart(canvas.getContext('2d'), {
        type: 'line',
        data: data,
        options: options,
      });
    };

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    createChart();

    // Clean up when component unmounts
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div>
        <p>Fees Collection & Expenses For Session 2023-24</p>
    <div style={{ width: '500px' }}>
       
      <div id="chart-container"></div>
    </div>
    </div>
  );
};

export default LinearChart;
