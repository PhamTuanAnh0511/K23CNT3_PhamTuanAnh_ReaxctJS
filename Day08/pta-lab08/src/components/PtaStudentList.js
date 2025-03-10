import React, { Component } from 'react';
import PtaStudent from './PtaStudent';

export default class PtaStudentList extends Component {
  render() {
    let { renderPtaStudents, onPtaHandleView, onPtaHandleEdit, onPtaHandleDelete } = this.props;

    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Mã SV</th>
            <th>Họ tên</th>
            <th>Tuổi</th>
            <th>Giới tính</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {renderPtaStudents.map((student, index) => (
            <PtaStudent 
              key={student.ptaID} 
              ptaIndex={index + 1} 
              renderPtaStudent={student} 
              onPtaHandleView={onPtaHandleView} 
              onPtaHandleEdit={onPtaHandleEdit}
              onPtaHandleDelete={onPtaHandleDelete}
            />
          ))}
        </tbody>
      </table>
    );
  }
}