import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
Chart.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ['Chrome', 'Firefox', 'IE'],
    datasets: [
      {
        data: [4306, 3801, 1689],
        backgroundColor: ['#FF0000', '#00FF00', '#0000FF'],
        hoverBackgroundColor: ['#e60000', '#00cc00', '#0000cc'],
        borderWidth: 2,
        borderColor: '#fff',
        hoverBorderColor: '#fff',
        cutout: '75%',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
      legend: {
        display: false,
      },
    },
    aspectRatio: 2,
  };

  return (
    <div className="col-12 col-md-6 col-xxl-3 d-flex order-2 order-xxl-3">
      <div className="card flex-fill w-80 bg-white shadow-md rounded-lg">
        <div className="card-header p-4">
          <h5 className="card-title mb-0 text-lg font-bold text-gray-800">Browser Usage</h5>
        </div>
        <div className="card-body d-flex p-4">
          <div className="align-self-center w-full">
            <div className="py-3 flex justify-center">
              <div className="max-w-xs">
                <Doughnut data={data} options={options} />
              </div>
            </div>
            <table className="table mb-0 w-full text-sm border-separate border-spacing-y-2">
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="font-medium text-gray-700 text-base">Chrome</td>
                  <td className="text-right text-gray-700 text-base">4306</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="font-medium text-gray-700 text-base">Firefox</td>
                  <td className="text-right text-gray-700 text-base">3801</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="font-medium text-gray-700 text-base">IE</td>
                  <td className="text-right text-gray-700 text-base">1689</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
