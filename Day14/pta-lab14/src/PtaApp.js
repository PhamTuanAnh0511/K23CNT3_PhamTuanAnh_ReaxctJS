import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PtaHome from './components/PtaHome';
import PtaNavBar from './components/PtaNavBar';
import PtaListUser from './components/PtaListUser';
import PtaCreateUser from './components/PtaCreateUser';
import PtaEditUser from './components/PtaEditUser';

export default function PtaApp() {
  return (
    <div>
      <div className="container border my-3">
        <h1 style={{ color: '#f0f0f0', opacity: 0.7 }}>ReactJs - MockAPI - MinniProject - [Phạm Tuấn Anh - K23CNT3]</h1>
        <hr />
        <Router>
          <PtaNavBar /> 
          <Routes>
            <Route path="/" element={<PtaHome />} />
            <Route path="/list-user" element={<PtaListUser />} /> 
            <Route path="/create-user" element={<PtaCreateUser />} />
            <Route path="/edit-user/:id" element={<PtaEditUser />} /> 
          </Routes>
        </Router>
      </div>
    </div>
  );
}