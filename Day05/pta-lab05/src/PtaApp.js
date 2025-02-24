import React, { Component } from 'react'
import PtaFuncCompEvent1 from './components/PtaFuncCompEvent1'
import PtaClassCompEvent1 from './components/PtaClassCompEvent1'
import PtaFuncCompEventProp from './components/PtaFuncCompEventProp'
import PtaClassCompEventProps from './components/PtaClassCompEventProps'
import PtaClassCompEventState from './components/PtaClassCompEventState'
import PtaClassCompEventPostData from './components/PtaClassCompEventPostData'

export default class PtaApp extends Component {
    constructor(props){
        super(props);
        this.state={
            ptaNoiDung:"Chưa có gì"
        }
    }
    // hàm xử lý sự kiện khi components con chuyển dữ liệu lên
    ptaHandleDataToApp = (content)=>{
        alert(content)
        this.setState({ ptaNoiDung: content });  // Cập nhật trạng thái với dữ liệu nhận được
    }
  render() {
    return (
      <div className='container border mt-3'>
            <h1 className='text-center alert-info my-2'>K23CNT3 Phạm Tuấn Anh - Event and Form</h1>
            <hr/>
            <div>
                <h2> Function Components</h2>
            <PtaFuncCompEvent1 />
            </div>
            <hr/>
            <div>
                <h2> Class Components</h2>
                <PtaClassCompEvent1 />
            </div>
            <hr/>
            <div>
                <h2> Function Components - Event ;Props</h2>
                <PtaFuncCompEventProp  ptaRenderName="Phạm Tuấn Anh" />
            </div>
            <hr/>
            <div>
                <h2> Class Components - Event ;Props</h2>
                <PtaClassCompEventProps ptaRenderTitle=" chào bạn"/>
            </div>
            <hr/>
            <div>
                <h2>Class Component - State</h2>
                <PtaClassCompEventState />
            </div>
            <hr/>
            <div>
                <h1>{this.state.ptaNoiDung}</h1>
                <h2>Class Component - Event; Post Data to app</h2>
                <PtaClassCompEventPostData onPtaDataToApp={this.ptaHandleDataToApp} />
            </div>
      </div>
    )
  }
}