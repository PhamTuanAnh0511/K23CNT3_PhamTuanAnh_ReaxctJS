import React, { Component } from 'react'

export default class PtaEventForm1 extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            ptaStudentName:"Phạm Tuấn"
        }
    }
    // Hàm sử lý sự kiện khi dữ liệu trên textbox ptaStudentName thay đổi
    ptaHandleChage = (event)=>{
        // cập nhập setstate
        this.setState({
            ptaStudentName:event.target.value
        })
    }
    // khi submit dỏm, lấy dữ liệu và hiển thị
    ptaHandleSubmit = (ev)=>{
        alert('Hello:' + this.state.ptaStudentName)
        ev.preventDefault()
    }
  render() {
    return (
      <div className='alert alert-info'>
            <h2>Form input</h2>
            <form onSubmit={this.ptaHandleSubmit}>
                <label htmlFor='ptaStudentName'>
                    <input type='text' name='ptaStudentName' id='ptaStudentName' value={this.state.ptaStudentName} 
                    onChange={this.ptaHandleChage} />
                </label>
                <button className='btn btn-primary'>Click Here</button>
            </form>
      </div>
    )
  }
}