import React, { Component } from 'react'
import PtaEventForm1 from './components/PtaEventForm1'
import PtaEventForm2 from './components/PtaEventForm2'
import PtaEventForm3 from './components/PtaEventForm3'
import PtaEventForm4 from './components/PtaEventForm4'
import PtaEventForm5 from './components/PtaEventForm5'


export default class PtaApp extends Component {
  // Hàm xử lý dữ liệu từ form student
  ptaHandleSubmitForm = (param)=>{
    console.log("Student:" ,param);
    
  }
  render() {
    return (
      <div className='container border my-3 bg-white'>
          <h1 className='text-center'>Event Form - Demo</h1>
          <hr/>
          <PtaEventForm1 />
          <PtaEventForm2 />
          <PtaEventForm3 />
          <PtaEventForm4 />
          <PtaEventForm5 onPtaHandleSubmit={this.ptaHandleSubmitForm} />
      </div>
    )
  }
}