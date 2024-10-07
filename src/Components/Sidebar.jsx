import React from 'react';
import { FiSliders, FiUser, FiLogIn, FiUserPlus, FiBook, FiSquare, FiCheckSquare, FiGrid, FiAlignLeft, FiCoffee, FiBarChart2, FiMap } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <nav id="sidebar" className="sidebar w-64 h-screen bg-gray-800 text-white">
      <div className="sidebar-content flex flex-col justify-between h-full overflow-y-auto">
        <div className="p-4">
          <a className="sidebar-brand text-xl font-bold flex items-center mb-8" href="/">
            <span className="align-middle">AdminKit</span>
          </a>

          <ul className="sidebar-nav space-y-4">
            <li className="sidebar-header text-gray-400 uppercase text-xs">Pages</li>

            <li className="sidebar-item active">
              <a className="sidebar-link flex items-center space-x-2 p-2 rounded-md bg-gray-700 hover:bg-gray-600" href="/">
                <FiSliders className="align-middle" /> 
                <span className="align-middle">Dashboard</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a className="sidebar-link flex items-center space-x-2 p-2 rounded-md hover:bg-gray-600" href="/#">
                <FiUser className="align-middle" />
                <span className="align-middle">Profile</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a className="sidebar-link flex items-center space-x-2 p-2 rounded-md hover:bg-gray-600" href="/#">
                <FiLogIn className="align-middle" />
                <span className="align-middle">Sign In</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a className="sidebar-link flex items-center space-x-2 p-2 rounded-md hover:bg-gray-600" href="/#">
                <FiUserPlus className="align-middle" />
                <span className="align-middle">Sign Up</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a className="sidebar-link flex items-center space-x-2 p-2 rounded-md hover:bg-gray-600" href="/#">
                <FiBook className="align-middle" />
                <span className="align-middle">Blank</span>
              </a>
            </li>

            <li className="sidebar-header text-gray-400 uppercase text-xs">Tools & Components</li>

            <li className="sidebar-item">
              <a className="sidebar-link flex items-center space-x-2 p-2 rounded-md hover:bg-gray-600" href="/#">
                <FiSquare className="align-middle" />
                <span className="align-middle">Buttons</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a className="sidebar-link flex items-center space-x-2 p-2 rounded-md hover:bg-gray-600" href="/#">
                <FiCheckSquare className="align-middle" />
                <span className="align-middle">Forms</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a className="sidebar-link flex items-center space-x-2 p-2 rounded-md hover:bg-gray-600" href="/#">
                <FiGrid className="align-middle" />
                <span className="align-middle">Cards</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a className="sidebar-link flex items-center space-x-2 p-2 rounded-md hover:bg-gray-600" href="/#">
                <FiAlignLeft className="align-middle" />
                <span className="align-middle">Typography</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a className="sidebar-link flex items-center space-x-2 p-2 rounded-md hover:bg-gray-600" href="/#">
                <FiCoffee className="align-middle" />
                <span className="align-middle">Icons</span>
              </a>
            </li>

            <li className="sidebar-header text-gray-400 uppercase text-xs">Plugins & Addons</li>

            <li className="sidebar-item">
              <a className="sidebar-link flex items-center space-x-2 p-2 rounded-md hover:bg-gray-600" href="/#">
                <FiBarChart2 className="align-middle" />
                <span className="align-middle">Charts</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a className="sidebar-link flex items-center space-x-2 p-2 rounded-md hover:bg-gray-600" href="/#">
                <FiMap className="align-middle" />
                <span className="align-middle">Maps</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="sidebar-cta p-4 bg-gray-700 rounded-lg m-4">
          <div className="sidebar-cta-content">
            <strong className="d-inline-block mb-2 text-sm">Upgrade to Pro</strong>
            <div className="mb-3 text-xs">
              Are you looking for more components? Check out our premium version.
            </div>
            <div className="flex">
              <a href="/upgrade-to-pro" className="btn btn-primary w-full bg-blue-600 text-white py-2 rounded-md text-center">
                Upgrade to Pro
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
