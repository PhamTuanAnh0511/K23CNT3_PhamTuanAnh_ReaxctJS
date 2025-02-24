import React, { Component } from 'react'

export default class PtaClassCompEventPostData extends Component {
    constructor(props){
        super(props);

    }
    // hàm sử lý sự kiện
    ptaHandleClick = ()=>{
        // Chuyển dự liêu lên app thông qua props
        this.props.onPtaDataToApp("Lesson05 Event; Dữ liệu từ conponents con  - PtaClassCompEventPostData ")
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <button className='btn btn-primary'
        onClick={this.ptaHandleClick}> Button 1 - Chuyển dữ liệu lên App</button>
      </div>
    )
  }
}