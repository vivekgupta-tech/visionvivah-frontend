import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Navbar = ({ isAuthenticated, onLogout }) => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        {!isAuthenticated && <li><Link to="/register">Register</Link></li>}
        {!isAuthenticated && <li><Link to="/login">Login</Link></li>}
        {isAuthenticated && (
          <>
            <li><Link to="/profile">Profile</Link></li>
            <li><button onClick={onLogout}>Logout</button></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;








