import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [2115, 1562, 1584, 1892, 1487, 2223, 2966, 2448, 2905, 3838, 2917, 3327],
        fill: true,
        borderColor: '#1e88e5',
        tension: 0.1,
        pointBackgroundColor: '#ffffff',
        pointBorderColor: '#1e88e5',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `$${tooltipItem.parsed.y}`; // Format value with a dollar sign
          },
        },
      },
      legend: {
        display: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Sales ($)',
        },
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return `$${value}`; // Format y-axis labels with a dollar sign
          },
        },
      },
    },
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h5 className="text-lg font-medium mb-4">Recent Movement</h5>
      <Line data={data} options={options} height={100}/>
    </div>
  );
};

export default LineChart;
