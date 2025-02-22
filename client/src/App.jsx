/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import {  BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from './component/Login/Login';
import Signup from './component/SignUp/Signup';
import Admin from './component/Admin/Admin';
import ConcludeResignation from './component/Admin/ConcludeResignation';
function App() {


  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path="/conclude_resignation/:id" element={<ConcludeResignation />} />
        <Route />
      </Routes>

    </Router>
  )
}

export default App
