import React from 'react'

export default function PtaFuncCompEvent1() {
    // hàm xữ lý sự kiện
    const ptaEventButton1Click = ()=>{
        alert('button 1 - Clicked')
    }
    
const ptaEventButton2Click = ()=>{
    alert('buttom 2 - Clicked')
}

    const ptaEventButton3Click = (name) => {
        alert("Name:" + name)
    }
  return (
    <div className='alert alert-info'>
        {/* <button className='btn btn-primary' onClick={ptaEventButton1Click()}>Button1</button> */}
        <button className='btn btn-success mx-1' onClick={ptaEventButton2Click}>Button2</button>
        <button className='btn btn-success mx-1' onClick={()=>ptaEventButton3Click("Phạm Tuấn")}>Button3</button>
        {/* <button className='btn btn-success' onClick={ptaEventButton3Click("Phạm Tuấn")}>Button4</button> */}


    </div>
  )
}