import React, { Component } from 'react'

export default class PtaClassCompEventState extends Component {
    constructor(props){
        super(props);
        this.state = {
            ptaFullName:"Phạm Tuấn Anh",
            ptaAge:20
        }
    }
    // hàm xử lý sự kiện
    ptaEventHandleClick1 = ()=>{
        // lấy dữ lieuj trong state
        alert('FullName=' + this.state.ptaFullName + '\n Age' + this.state.ptaAge)
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <button className='btn btn-primary' onClick={this.ptaEventHandleClick1}>Button1 - Dữ liệu trong state</button>
    
      </div>
    )
  }
}