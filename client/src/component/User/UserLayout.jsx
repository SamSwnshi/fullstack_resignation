import React from 'react';
import { Outlet } from 'react-router-dom';
import UserHeader from './UserHeader';

const UserLayout = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-gray-100 ">
      <UserHeader />
      <div className="flex-grow p-6 mt-16 ">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
