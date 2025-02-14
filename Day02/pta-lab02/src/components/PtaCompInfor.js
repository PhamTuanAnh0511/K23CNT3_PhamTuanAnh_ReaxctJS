import React, { Component } from 'react'

export default class PtaCompInfor extends Component {
    constructor(props){
        super(props);
        this.state={
            Information: "Trình bày thông tin cá nhân",
          };
        } 
    render() {
        return (
        <div>
            <p>{this.state.Information}</p>
            <p>Họ Và Tên: {this.props.ptaFullName}</p>
            <p>Mã Sinh Viên: {this.props.ptaKey}</p>
            <p>Ngày Sinh: {this.props.ptaDate}</p>
            <p>Điện Thoại: {this.props.ptaNumber}</p>
            <p>Tên Lớp: {this.props.ptaClass}</p>
        </div>
        )
    } 
}
