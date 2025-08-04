import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      // Optional: localStorage.clear();
      navigate("/");
    }
  };

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <Link
        to="/dashboard"
        className="text-xl font-bold text-indigo-600 hover:underline transition"
      >
        Intern Portal
      </Link>
      <div className="flex space-x-4">
        <Link
          to="/dashboard"
          className="text-gray-700 hover:text-indigo-500 transition font-medium"
        >
          Dashboard
        </Link>
        <Link
          to="/leaderboard"
          className="text-gray-700 hover:text-indigo-500 transition font-medium"
        >
          Leaderboard
        </Link>

        <Link
        to="/analytics"
        className="text-gray-700 hover:text-indigo-500 transition font-medium"
        >
          Analytics
        </Link>
        
        <Link to="/profile" className="hover:text-indigo-600">Profile</Link>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md text-sm font-medium"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
