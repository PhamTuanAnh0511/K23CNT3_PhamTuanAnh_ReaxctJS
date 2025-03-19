import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function PtaReadApiLocal() {
    // khởi tạo state
    const [ptaListUser, setPtaListUser] = useState([])
    // đọc dữ liệu từ api local  và set cho ptaListUser
    const apiUrl = "http://localhost:3001/users"
    // Lấy danh sách từ apiUrl
    useEffect(()=>{
        axios
            .get(apiUrl)
            .then((ptaResponse)=>{
                setPtaListUser(ptaResponse.data)
            })
            .catch((error)=>{
                console.log("Lỗi");
            })
    },[])

  return (
    <div>
        <h2>Đọc dữ liệu từ API Local</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>FullName</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    ptaListUser.map((ptaItem, index)=>{
                        return (
                            <tr>
                                <td>{ptaItem.fullName}</td>
                                <td>{ptaItem.age}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}