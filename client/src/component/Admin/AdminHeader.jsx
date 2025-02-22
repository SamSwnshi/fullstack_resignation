import React from "react";
import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
  
    localStorage.removeItem("token"); 
    localStorage.removeItem("user"); 
    navigate("/");
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <nav className="flex items-center">
         
          <button
            onClick={handleLogout}
            className="ml-4 px-4 py-2 bg-red-500 hover:bg-red-600 rounded text-white"
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default AdminHeader;
