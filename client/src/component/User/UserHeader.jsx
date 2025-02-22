import React from 'react';
import { Outlet } from 'react-router-dom';
import UserHeader from './UserHeader';

const UserLayout = () => {
  return (
    <div className="w-screen h-screen flex flex-col bg-gray-100 overflow-hidden">
      <UserHeader />
      <div className="flex-grow flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
