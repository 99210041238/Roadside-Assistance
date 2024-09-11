import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">Roadside Assistance</Link>
        <div className="space-x-4">
          <Link to="/request" className="text-white hover:underline">Request Assistance</Link>
          <Link to="/track" className="text-white hover:underline">Track Mechanic</Link>
          <Link to="/login" className="text-white hover:underline">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
