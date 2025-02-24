import React, { Component } from 'react'

export default class PtaClassCompEventProps extends Component {
   ptaEventHandleClick1 = ()=>{
    // lấy dữ liệu props từ App.js
    alert('Hello...' + this.props.ptaRenderTitle)
   }
  render() {
    return (
      <div className='alert alert-danger'>
        <button className='btn btn-primary' onClick={this.ptaEventHandleClick1}>Button1</button>
      </div>
    )
  }
}