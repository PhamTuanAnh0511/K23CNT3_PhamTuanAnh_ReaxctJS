import React, { Component } from 'react'
import PtaEventForm1 from './components/PtaEventForm1';
import PtaEventForm2 from './components/PtaEventForm2';
import PtaEventForm3 from './components/PtaEventForm3';
import PtaEventForm4 from './components/PtaEventForm4';
import PtaEventForm5 from './components/PtaEventForm5';
import PtaRenderCon from './components/PtaRenderCon';
import PtaRenderArray from './components/PtaRenderArray';
import PtaRenderListObject from './components/PtaRenderListObject';
import PtaProductList from "./components/PtaProductList";

class PtaApp extends Component {
    // Hàm xử lý dữ liệu từ form student
  PtaHandleSubmitForm = (param)=>{
    console.log("Student:" ,param);
    
  }

  render() {
    return (
      <div className='container border my-3 bg-white'>
          <h1 className='text-center'>Phạm Tuấn Anh Event Form - Demo</h1>
          <hr/>
          <PtaEventForm1 />
          <PtaEventForm2 />
          <PtaEventForm3 />
          <PtaEventForm4 />
          <PtaEventForm5  onPtaHandleSubmit={this.ptaHandleSubmitForm}  />
          <PtaEventForm5 onPtaHandleSubmit={this.props.onPtaHandleSubmit} />
          <PtaRenderCon />
          <PtaRenderArray />
          <PtaRenderListObject />
          <h1 className="text-center">Quản Lý Sản Phẩm</h1>
          <PtaProductList />
      </div>
    );
  }
}
export default PtaApp;