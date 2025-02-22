import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/Login/Login';
import Signup from './component/SignUp/Signup';
import AdminLayout from './component/Admin/AdminLayout';
import Admin from './component/Admin/Admin';
import ConcludeResignation from './component/Admin/ConcludeResignation';
import ExitResponse from './component/Admin/ExitResponse';
import Resign from './component/User/Resign';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />

        <Route path='/resign' element={<Resign/>}/>
        
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="resignations" element={<Admin />} />
          <Route path="conclude_resignation/:id" element={<ConcludeResignation />} />
          <Route path="exit_responses" element={<ExitResponse />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

