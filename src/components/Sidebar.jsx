// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust the path based on your folder structure

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      {/* Logo */}
      <img src={logo} alt="Hiphonic Logo" className="h-12 w-full mb-6 object-contain" />
      <nav className="mt-4">
        <ul>
          <li>
            <Link to="/overview" className="block py-2 hover:bg-gray-700">
              Overview
            </Link>
          </li>
          <li>
            <Link to="/analytics" className="block py-2 hover:bg-gray-700">
              Analytics
            </Link>
          </li>
          <li>
            <Link to="/orders" className="block py-2 hover:bg-gray-700">
              Orders
            </Link>
          </li>
          <li>
            <Link to="/products" className="block py-2 hover:bg-gray-700">
              Products
            </Link>
          </li>
          <li>
            <Link to="/customers" className="block py-2 hover:bg-gray-700">
              Customers
            </Link>
          </li>
          <li>
            <Link to="/settings" className="block py-2 hover:bg-gray-700">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
