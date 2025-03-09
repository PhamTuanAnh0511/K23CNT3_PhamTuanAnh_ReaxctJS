import React, { Component } from 'react';
import PtaControl from './components/PtaControl';
import PtaStudentList from './components/PtaStudentList';
import PtaForm from './components/PtaForm';

class PtaApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ptaStudents: [ 
        { ptaID: "SV001", ptaStudentName: "Phạm Tuấn Anh", ptaAge: 19, ptaGender: "Nam", ptaBirthday: "05/11/2005", ptaBrithPlace: "QN", ptaAddress: "Yên Xá" },
        { ptaID: "SV002", ptaStudentName: "Nguyễn Trọng Hưng", ptaAge: 19, ptaGender: "Nam", ptaBirthday: "04/09/2005", ptaBrithPlace: "HN", ptaAddress: "Hai Bà Trưng" },
        { ptaID: "SV003", ptaStudentName: "Nguyễn Hữu Chung", ptaAge: 19, ptaGender: "Nam", ptaBirthday: "04/09/2005", ptaBrithPlace: "HD", ptaAddress: "Hải Dương" },
        { ptaID: "SV004", ptaStudentName: "Nguyễn Gia Duy", ptaAge: 20, ptaGender: "Nam", ptaBirthday: "13/01/2005", ptaBrithPlace: "HD", ptaAddress: "Yên Xá" }
      ],
      selectedStudent: null
    };
  }

  // Xử lý khi bấm "Xem"
  onPtaHandleView = (ptaStudent) => {
    this.setState({ selectedStudent: ptaStudent });
  };

  // Xử lý khi bấm "Sửa"
  onPtaHandleEdit = (ptaStudent) => {
    this.setState({ selectedStudent: ptaStudent });
  };

  // Xử lý khi bấm "Xóa"
  onPtaHandleDelete = (studentID) => {
    let filteredStudents = this.state.ptaStudents.filter(student => student.ptaID !== studentID);
    this.setState({ ptaStudents: filteredStudents });
  };

  // ✅ Xử lý khi bấm "Lưu" sau khi chỉnh sửa
  onPtaHandleUpdate = (updatedStudent) => {
    let updatedStudents = this.state.ptaStudents.map(student => 
      student.ptaID === updatedStudent.ptaID ? updatedStudent : student
    );

    this.setState({ 
      ptaStudents: updatedStudents,
      selectedStudent: null // Reset form sau khi cập nhật
    });
  };

  render() {
    return (
      <div>
        <h1 className='text-center'>Phạm Tuấn Anh - K23CNT3 - Mini Project</h1>
        <section className='container-fluid mt-3'>
          <div className="row">
            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">
                <PtaControl />
                <PtaStudentList
                  renderPtaStudents={this.state.ptaStudents}
                  onPtaHandleView={this.onPtaHandleView}
                  onPtaHandleEdit={this.onPtaHandleEdit}
                  onPtaHandleDelete={this.onPtaHandleDelete}
                />
              </div>
            </div>
            <div className="col-5 grid-margin">
              {/* 🔥 Truyền `onPtaHandleUpdate` vào `PtaForm` */}
              <PtaForm 
                renderPtaStudent={this.state.selectedStudent} 
                onPtaHandleUpdate={this.onPtaHandleUpdate} 
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default PtaApp;