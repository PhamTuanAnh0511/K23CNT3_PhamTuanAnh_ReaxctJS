import React, { Component } from 'react';

export default class PtaStudent extends Component {
  render() {
    let { renderPtaStudent, ptaIndex, onPtaHandleView, onPtaHandleEdit, onPtaHandleDelete } = this.props;

    return (
      <tr>
        <td>{ptaIndex}</td>
        <td>{renderPtaStudent.ptaID}</td>
        <td>{renderPtaStudent.ptaStudentName}</td>
        <td>{renderPtaStudent.ptaAge}</td>
        <td>{renderPtaStudent.ptaGender}</td>
        <td>
          <button className="btn btn-info btn-sm me-2" onClick={() => onPtaHandleView(renderPtaStudent)}>Xem</button>
          <button className="btn btn-warning btn-sm me-2" onClick={() => onPtaHandleEdit(renderPtaStudent)}>Sửa</button>
          <button className="btn btn-danger btn-sm" onClick={() => onPtaHandleDelete(renderPtaStudent.ptaID)}>Xóa</button>
        </td>
      </tr>
    );
  }
}