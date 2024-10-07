import React, { useState } from 'react';
import Navbar from './Components/Navbar';
// Add other components here as needed
// e.g., import Component3 from './Components/Component3';

const componentsList = [
  { name: 'Navbar', component: Navbar },
  {name : 'Notifications Dropdown', component: Navbar},
  // Add other components here as needed
];

const App = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div className="p-4">
      {/* Button Layout */}
      <div className="flex space-x-4 mb-8">
        {componentsList.map(({ name }, index) => (
          <button
            key={index}
            onClick={() => setActiveComponent(name)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {name}
          </button>
        ))}
      </div>

      {/* Display Active Component */}
      <div className="p-4 border rounded shadow-md bg-gray-100">
        {activeComponent ? (
          React.createElement(
            componentsList.find(({ name }) => name === activeComponent).component
          )
        ) : (
          <p className="text-gray-500">Select a component to display</p>
        )}
      </div>
    </div>
  );
};

export default App;
