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
      <div className="container border my-3" style={{ backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', padding: '20px', marginBottom: '40px' }}>
                    
        <h1 style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '2.3rem', padding: '10px 0', color: '#34495e' }}>ReactJs - MockAPI - MinniProject - [Phạm Tuấn Anh - K23CNT3]</h1>
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