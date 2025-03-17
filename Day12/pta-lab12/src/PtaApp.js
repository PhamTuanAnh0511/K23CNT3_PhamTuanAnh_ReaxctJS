import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import PtaNavNar from './components/PtaNavNar'
import PtaHome from './components/PtaHome'
import PtaAbout from './components/PtaAbout'
import PtaContact from './components/PtaContact'
import PtaListUser from './components/PtaListUser'
import PtaFormUser from './components/PtaFormUser'
export default function PtaApp() {

  const listUsers  = [
    {id:"SV001", ptaFullName:"Phạm Tuấn Anh", ptaUserName:"PhamTuan", ptaPass:"123456"},
    {id:"SV002", ptaFullName:"Nguyễn Gia Duy", ptaUserName:"DuyNen", ptaPass:"123456"},
    {id:"SV003", ptaFullName:"Nguyễn Trọng Hưng", ptaUserName:"HungHipHop", ptaPass:"123456"},
  ]

  const[ptaUsers, setPtaUsers] = useState(listUsers)

  // Hàm xử lý sự kiện thêm mới
  const ptaHandleAdd = (ptaParam)=>{
    console.log("ptaHandleAdd:", ptaParam);
    
    setPtaUsers(prev =>{ 
      return [
        ...prev,
        ptaParam
      ]
    })
  }
  return (
    <div className='container border my-3'>
        <h1>React Router Dom - Demo - [Phạm Tuấn Anh - K23CNT3]</h1>
        <hr/>
        <Router>
            <PtaNavNar />
            <Routes>
                <Route path='/' element = {<PtaHome />} />
                <Route path='/about' element = {<PtaAbout />} />
                <Route path='/contact' element = {<PtaContact />} />
                <Route path='/list-user' element = {<PtaListUser  renderPtaUsers={ptaUsers}/>} />
                <Route path='/create-user' element = {<PtaFormUser  onPtaAddNew={ptaHandleAdd}/>} />
            </Routes>
        </Router>
    </div>
  )
}