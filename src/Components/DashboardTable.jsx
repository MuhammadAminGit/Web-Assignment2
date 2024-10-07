import React from 'react';

const DashboardTable = () => {
  const projects = [
    { name: 'Project Apollo', startDate: '01/01/2023', endDate: '31/06/2023', status: 'Done', assignee: 'Vanessa Tucker', statusColor: 'bg-green-500' },
    { name: 'Project Fireball', startDate: '01/01/2023', endDate: '31/06/2023', status: 'Cancelled', assignee: 'William Harris', statusColor: 'bg-red-500' },
    { name: 'Project Hades', startDate: '01/01/2023', endDate: '31/06/2023', status: 'Done', assignee: 'Sharon Lessman', statusColor: 'bg-green-500' },
    { name: 'Project Nitro', startDate: '01/01/2023', endDate: '31/06/2023', status: 'In progress', assignee: 'Vanessa Tucker', statusColor: 'bg-yellow-500' },
    { name: 'Project Phoenix', startDate: '01/01/2023', endDate: '31/06/2023', status: 'Done', assignee: 'William Harris', statusColor: 'bg-green-500' },
    { name: 'Project X', startDate: '01/01/2023', endDate: '31/06/2023', status: 'Done', assignee: 'Sharon Lessman', statusColor: 'bg-green-500' },
    { name: 'Project Romeo', startDate: '01/01/2023', endDate: '31/06/2023', status: 'Done', assignee: 'Christina Mason', statusColor: 'bg-green-500' },
    { name: 'Project Wombat', startDate: '01/01/2023', endDate: '31/06/2023', status: 'In progress', assignee: 'William Harris', statusColor: 'bg-yellow-500' }
  ];

  return (
    <div className="flex flex-col space-y-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4 bg-gray-100 border-b border-gray-200">
          <h5 className="font-semibold text-gray-700 text-lg">Latest Projects</h5>
        </div>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-50 text-left text-gray-500 uppercase text-sm leading-normal">
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6 hidden xl:table-cell">Start Date</th>
              <th className="py-3 px-6 hidden xl:table-cell">End Date</th>
              <th className="py-3 px-6">Status</th>
              <th className="py-3 px-6 hidden md:table-cell">Assignee</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {projects.map((project, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-6">{project.name}</td>
                <td className="py-3 px-6 hidden xl:table-cell">{project.startDate}</td>
                <td className="py-3 px-6 hidden xl:table-cell">{project.endDate}</td>
                <td className="py-3 px-6">
                  <span className={`text-white py-1 px-3 rounded-full text-xs ${project.statusColor}`}>
                    {project.status}
                  </span>
                </td>
                <td className="py-3 px-6 hidden md:table-cell">{project.assignee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardTable;
