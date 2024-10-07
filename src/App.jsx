import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import LineChart from './Components/LineChart';
import Calendar from './Components/Calendar';
import PieChart from './Components/PieChart';
import Sidebar from './Components/Sidebar';
import ProfileCard from './Components/ProfileCard';
import Footer from './Components/Footer';
import BarChart from './Components/BarChart';
import TestimonialCarousel from './Components/TestimonialCarousel';
import Menu from './Components/Menu';
import DashboardTable from './Components/DashboardTable';

const componentsList = [
  { name: 'Navbar', component: Navbar },
  {name : 'Notifications Dropdown', component: Navbar},
  {name : 'Card', component: Card},
  {name : 'Line Chart', component: LineChart},
  {name : 'Calendar', component: Calendar},
  {name : 'Pie Chart', component: PieChart},
  {name : 'Sidebar', component: Sidebar},
  {name : 'Profile Card', component: ProfileCard},
  {name : 'Footer', component: Footer},
  {name : 'Bar Chart', component: BarChart},
  {name : 'Testimonial Carousel', component: TestimonialCarousel},
  {name : 'Menu', component: Menu},
  {name : 'Dashboard Table', component: DashboardTable},

];

const App = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div className="p-4">
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
