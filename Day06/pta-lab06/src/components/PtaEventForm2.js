import React, { Component } from 'react'

export default class PtaEventForm2 extends Component {
    constructor(props){
        super(props);
        this.state={
            ptaCourse: 'CSS3'
        }
    }
    ptaHandleChage = (event)=>{
        this.setState({
            ptaCourse:event.target.value
        })
    }
    ptaHandleSubmit = (ev) =>{
        alert('Khóa Học Đã Chọn Khi Submit:' + this.state.ptaCourse)
        ev.preventDefault()
    }
  render() {
    return (
      <div className='alert alert-danger'>
       <h2>Form Select</h2>
            <form onSubmit={this.ptaHandleSubmit}>
                <label>
                    Chọn khóa học:
                    <select name='ptaCourse' id='ptaCourse'
                     value={this.state.ptaCourse} onChange={this.ptaHandleChage}>
                        <option value={"HTML3"}>HTML3</option>
                        <option value="CSS3">CSS3</option>
                        <option value="JS">JavaScript</option>
                        <option value="reactjs">ReactJS</option>
                        <option value="BOOTRAP5">BOOTRAP5</option>
                    </select>
                </label>
                <button className='btn btn-primary'>Click Here</button>
            </form>
      </div>
    )
  }
}
