import React from 'react';
import { useNavigate } from "react-router-dom";

const UserHeader = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token"); 
    localStorage.removeItem("user"); 
    navigate("/");
  };

  return (
    <header className="w-full bg-gray-800 text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-10">
      <h1 className="text-lg font-bold">User Dashboard</h1>
      <button 
        onClick={handleLogout} 
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
        Logout
      </button>
    </header>
  );
};

export default UserHeader;
