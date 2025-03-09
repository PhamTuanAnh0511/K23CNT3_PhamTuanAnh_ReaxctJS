import React, { Component } from 'react';

export default class PtaStudent extends Component {

    // Hàm xử lý khi bấm "Xem"
    ptaHandleView = () => {
        this.props.onPtaHandleView(this.props.renderPtaStudent);
    }

    // Hàm xử lý khi bấm "Sửa"
    ptaHandleEdit = () => {
        this.props.onPtaHandleEdit(this.props.renderPtaStudent);
    }

    // Hàm xử lý khi bấm "Xóa"
    ptaHandleDelete = () => {
        this.props.onPtaHandleDelete(this.props.renderPtaStudent.ptaID);
    }

    render() {
        let { renderPtaStudent, ptaIndex } = this.props;
        console.log("Student:", renderPtaStudent);

        return (
            <tr>
                <td>{ptaIndex}</td>
                <td>{renderPtaStudent.ptaID}</td>
                <td>{renderPtaStudent.ptaStudentName}</td>
                <td>{renderPtaStudent.ptaAge}</td>
                <td>{renderPtaStudent.ptaGender}</td>
                <td>
                    <div className="template-demo">
                        <button
                            type="button"
                            className="btn btn-danger btn-icon-text"
                            onClick={this.ptaHandleView}>
                            Xem
                        </button>
                        <button
                            type="button"
                            className="btn btn-warning btn-icon-text"
                            onClick={this.ptaHandleEdit}>
                            Sửa
                        </button>
                        <button
                            type="button"
                            className="btn btn-success btn-icon-text"
                            onClick={this.ptaHandleDelete}>
                            Xóa
                        </button>
                    </div>
                </td>
            </tr>
        );
    }
}