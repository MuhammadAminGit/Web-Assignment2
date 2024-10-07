import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "This year",
        backgroundColor: "#007bff", 
        borderColor: "#007bff", 
        hoverBackgroundColor: "#007bff", 
        hoverBorderColor: "#007bff", 
        data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79], 
        barPercentage: 0.75, 
        categoryPercentage: 0.5, 
      },
    ],
  };


  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Monthly Sales',
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, 
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: '#e5e5e5', 
        },
      },
    },
  };

  return (
    <div className="w-96 h-96 bg-white p-4 rounded-lg shadow-lg">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
