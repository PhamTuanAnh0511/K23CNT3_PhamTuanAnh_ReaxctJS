import React, { Component } from 'react'

export default class PtaEventForm3 extends Component {
    constructor(props){
        super(props);
        this.state={
            ptaGioiTinh: "Nam"
        }
    }
    ptaHanleChange = (event)=>
    {
        this.setState({
            ptaGioiTinh:event.target.value
        })
    }

    // Hmaf xử lý sự kiện submit form
    ptaHandleSubmit = (event)=>{
        event.preventDefault()
        alert('Giới tính của bạn là:' + this.state.ptaGioiTinh)
    }
  render() {
    return (
      <div className='alert alert-success'>
            <h2>Form Input - Radio</h2>
            <form>
                <div>
                    <label htmlFor=''>Giới tính:</label>
                    <input type='radio' name='ptaGioiTinh'  id='ptaNam' className='mx-2'
                     value="Nam" checked={this.state.ptaGioiTinh === 'Nam'} onChange={this.ptaHanleChange}/> 
                        <label htmlFor='ptaNam'>Nam</label>
                    <input type='radio' name='ptaGioiTinh'  id='ptaNu' className='mx-2'
                    value="Nữ" checked={this.state.ptaGioiTinh === 'Nữ'} onChange={this.ptaHanleChange}/> 
                        <label htmlFor='ptaNu'>Nữ</label>
                    <input type='radio' name='ptaGioiTinh'   id='ptaKhac' className='mx-2'
                    value="Khác" checked={this.state.ptaGioiTinh === 'Khác'} onChange={this.ptaHanleChange}/> 
                        <label htmlFor='ptaKhac'>Khác</label>
                  
                </div>
                <button onClick={this.ptaHandleSubmit} className='btn btn-success mt-3'> SubMit </button>
            </form>
      </div>
    )
  }
}