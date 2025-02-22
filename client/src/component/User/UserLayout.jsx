import React from 'react';
import { Outlet } from 'react-router-dom';
import UserHeader from './UserHeader';

const UserLayout = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-100">
      <UserHeader />
      <div className="flex-grow p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
