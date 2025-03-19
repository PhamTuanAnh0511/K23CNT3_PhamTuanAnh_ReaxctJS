import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function PtaReadMockAPI() {
    // khởi tạo state 
    const [ptaListUser, setPtaListUser] = useState([])
    // api
    const ptaApiOnline = "https://67da77a535c87309f52ca47b.mockapi.io/K23CNT3-PhamTuanAnh/pta_users"
    // Đọc dữ liệu từ api bằng axios
    useEffect(()=>{
        axios
            .get(ptaApiOnline)
            .then((pta_response)=>{
                setPtaListUser(pta_response.data)
            })
            .catch((error)=>{
                console.log("Lỗi phát sinh");
            })
    },[])

    // view data
    const ptaElementUser = ptaListUser.map((pta_item, index)=>{
        return(
            <tr>
                <td>{pta_item.ptaId}</td>
                <td>{pta_item.ptaFullName}</td>
                <td>{pta_item.ptaAge}</td>
                <td>{pta_item.ptaActive?'Hoạt động':'Khóa'}</td>
                <td>
                    <button>Sửa</button>
                    <button>Xóa</button>
                </td>
            </tr>
        )
    })
  return (
    <div className='alert alert-danger'>
        <h2>Danh sách</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>FullName</th>
                    <th>Age</th>
                    <th>Active</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                   ptaElementUser
                }
            </tbody>
        </table>
    </div>
  )
}