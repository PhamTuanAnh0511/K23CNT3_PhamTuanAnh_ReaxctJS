import React from 'react'
import PtaReadApiLocal from './components/PtaReadApiLocal'
import PtaReadMockAPI from './components/PtaReadMockAPI'
import PtaCreateMockAPI from './components/PtaCreateMockAPI'

export default function PtaApp() {
  return (
    <div className='container border my-3 p-3'>
        <h1> ReactJS - API - Phạm Tuấn Anh</h1>
        <hr/>
        <PtaReadApiLocal />
        <hr/>
        <h2>Đọc dữ liệu từ MockAPi (mockapi.io)</h2>
        <PtaReadMockAPI />

        <PtaCreateMockAPI />
    </div>
  )
}