import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './ChartComponent.css';

const ChartComponent = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const chartCanvas = chartRef.current;

    if (chartInstanceRef.current) {
      // Destroy the previous chart instance
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(chartCanvas, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [
          {
            
            data: [450, 480, 420, 600],
            backgroundColor: 'rgba(237, 103, 136, 0.4)',
            borderColor: 'rgba(237, 103, 136, 1)',
            borderWidth: 2,
            label: 'Burger', 
          },
          {
          
            data: [300, 350, 400, 450],
            backgroundColor: 'rgba(237, 103, 136, 0.2)',
            borderColor: 'rgba(237, 103, 136, 1)',
            borderWidth: 2,
            label: 'patty',
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: 800, // Set the maximum value on the y-axis to 800
            stepSize: 200,
          },
        },
        cornerRadius: 50, // Set a common border radius value for all bars
      },
    });
  }, []);

  return (
    <div className="chartinner">
      <p>Performance</p>
      <div className="chart-component">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default ChartComponent;
