import React from 'react'

export default function PtaFuncCompEventProp(Ptaprops) {
    const ptaHandleButtonClick1 = ()=>{
        alert('Dữ liệu từ props:' + Ptaprops.ptaRenderName);
        console.log("Xin chào" + Ptaprops.ptaRenderName)
    }

    const ptaHandleButtonClick2 = (param)=>{
        alert('Dữ liệu từ props:' + Ptaprops.ptaRenderName);
      console.log('=================================');
      console.log('hi',param);
      console.log('=================================');
      
    }
  return ( 
    <div className='alert alert-danger'>
        <button className='btn btn-primary mx-1 ' onClick={ptaHandleButtonClick1}>Button 1</button>
        <button className='btn btn-danger mx-1' onClick={() => ptaHandleButtonClick2('Button2')}>Button 2</button>
    </div>
  )
}