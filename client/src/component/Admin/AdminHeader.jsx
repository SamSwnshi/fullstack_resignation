import React from 'react';

const AdminHeader = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <nav>
          <a href="/admin/resignations" className="text-white ml-4">Home</a>
          
        </nav>
      </div>
    </header>
  );
};

export default AdminHeader;
