// Thêm mới dữ liệu 

import React, { useState } from 'react'
import axios from 'axios'
export default function PtaCreateMockAPI() {
    // khởi tạo state
    const [ptaFullName,setPtaFullName] = useState('')
    const [ptaAge,setPtaAge] = useState(0)
    const [ptaActive,setPtaActive] = useState(true)

    // api post
    const ptaCreateUserApi = "https://67d8d4aa00348dd3e2a85ce1.mockapi.io/k23cnt1_trinhvanchung/pta_users";

    // khi submit form
    const ptaHandleSubmit = (event)=>{
        event.preventDefault();
        console.log("ptaActive:",ptaActive);
        let ptaNewUser = {ptaFullName,ptaAge,ptaActive};
        console.log(ptaNewUser);

        // ghi dữ liệu vào api
        axios
            .post(ptaCreateUserApi, ptaNewUser)
            .then((pta_response)=>{
                
            })
        
    }
  return (
    <div className='alert alert-info'>
        <h2>Thêm mới users</h2>
        <hr/>
        <form>
            <div className=' mb-1'>
                <label for="ptaFullName">Full Name</label>
                <input type='text' name='ptaFullName' id="ptaFullName" 
                    value={ptaFullName}
                    onChange={(ev)=>setPtaFullName(ev.target.value)} />
            </div>
            <div className=' mb-1'>
                <label for="ptaAge">Age</label>
                <input type='number' name='ptaAge' id="ptaAge" 
                    value={ptaAge}
                    onChange={(ev)=>setPtaAge(ev.target.value)} />
            </div>
            <div className=' mb-1'>
                <label for="ptaActive">Active</label>
                <input type='radio' name='ptaActive' id="ptaActive_hd" value={'true'} 
                    onChange={(ev)=>setPtaActive(ev.target.value)} />
                    <label for="ptaActive_hd"> Hoạt động</label>
                <input type='radio' name='ptaActive' id="ptaActive_kh" value={'false'} 
                    onChange={(ev)=>setPtaActive(ev.target.value)}/>
                    <label for="ptaActive_kh"> Khóa</label>
            </div>
            <button onClick={ptaHandleSubmit}>Create</button>
        </form>
    </div>
  )
}