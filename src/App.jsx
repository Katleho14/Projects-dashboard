// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar'; // Assuming Sidebar is in components folder
import Overview from './pages/Overview'; // Import your Overview component
import Settings from './pages/Settings'; // Example additional page
import './App.css'; // Optional, for additional styling

function App() {
    return (
        <Router>
            <div className="flex h-screen">
                <Sidebar />
                <div className="flex-1 p-6">
                    <Routes>
                        <Route path="/" element={<Overview />} />
                        <Route path="/settings" element={<Settings />} />
                        {/* Add more routes here as needed */}
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;

