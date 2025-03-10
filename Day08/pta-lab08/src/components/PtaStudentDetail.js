import React from 'react';

const PtaStudentDetail = ({ student, onClose }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Thông tin chi tiết</h3>
        <p><strong>Mã sinh viên:</strong> {student.ptaID}</p>
        <p><strong>Họ tên:</strong> {student.ptaStudentName}</p>
        <p><strong>Tuổi:</strong> {student.ptaAge}</p>
        <p><strong>Giới tính:</strong> {student.ptaGender}</p>
        <p><strong>Ngày sinh:</strong> {student.ptaBirthday}</p>
        <p><strong>Nơi sinh:</strong> {student.ptaBirthPlace}</p>
        <p><strong>Địa chỉ:</strong> {student.ptaAddress}</p>
        <button className="btn btn-secondary" onClick={onClose}>Đóng</button>
      </div>
    </div>
  );
};

export default PtaStudentDetail;