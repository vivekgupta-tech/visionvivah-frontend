import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Nav';
import Registration from './Registration';
import Login from './Login';
import Blog from "../Blog/Blog"

const A = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check if token exists
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token);
    }, []);

    const handleLogin = () => setIsAuthenticated(true);
    const handleLogout = () => setIsAuthenticated(false);

    return (
        <>
            <ToastContainer position="top-right" autoClose={3000} />
            <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
            <div className="app-container">
                <Routes>
                    <Route
                        path="/login"
                        element={<Login onLogin={handleLogin} isAuthenticated={isAuthenticated} onLogout={handleLogout} />}
                    />
                    <Route path="/register" element={<Registration />} />
                    <Route path="/blogs" element={<Blog />} />
                </Routes>
            </div>
        </>
    );
};

export default A;
