import React, { Component } from 'react';
import PtaControl from './components/PtaControl';
import PtaStudentList from './components/PtaStudentList';
import PtaForm from './components/PtaForm';
import PtaStudentDetail from './components/PtaStudentDetail'; 

class PtaApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ptaStudents: [ 
        { ptaID: "SV001", ptaStudentName: "Phạm Tuấn Anh", ptaAge: 19, ptaGender: "Nam", ptaBirthday: "05/11/2005", ptaBirthPlace: "QN", ptaAddress: "Yên Xá" },
        { ptaID: "SV002", ptaStudentName: "Nguyễn Trọng Hưng", ptaAge: 19, ptaGender: "Nam", ptaBirthday: "04/09/2005", ptaBirthPlace: "HN", ptaAddress: "Hai Bà Trưng" },
        { ptaID: "SV003", ptaStudentName: "Nguyễn Hữu Tuấn", ptaAge: 19, ptaGender: "Nam", ptaBirthday: "04/09/2005", ptaBirthPlace: "HD", ptaAddress: "Hải Dương" },
        { ptaID: "SV004", ptaStudentName: "Nguyễn Gia Duy", ptaAge: 20, ptaGender: "Nam", ptaBirthday: "13/01/2005", ptaBirthPlace: "HD", ptaAddress: "Yên Xá" }
      ],
      filteredStudents: [],
      selectedStudent: null,
      showDetail: false, 
      isAddingNew: false,
      searchKeyword: ''
    };
  }

  componentDidMount() {
    this.setState({ filteredStudents: this.state.ptaStudents });
  }

  // 🔎 Xử lý tìm kiếm sinh viên theo tên
  onPtaHandleSearch = (keyword) => {
    this.setState({ searchKeyword: keyword }, this.filterStudents);
  };

  // Hàm lọc danh sách sinh viên dựa vào từ khóa tìm kiếm
  filterStudents = () => {
    const { ptaStudents, searchKeyword } = this.state;
    const filtered = ptaStudents.filter(student =>
      student.ptaStudentName.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    this.setState({ filteredStudents: filtered });
  };

  // 🔎 Xử lý khi bấm "Xem"
  onPtaHandleView = (ptaStudent) => {
    this.setState({
      selectedStudent: ptaStudent,
      showDetail: true,
      isAddingNew: false
    });
  };

  // ❌ Xử lý khi bấm "Đóng"
  onPtaHandleCloseDetail = () => {
    this.setState({ showDetail: false });
  };

  // ✏️ Xử lý khi bấm "Sửa"
  onPtaHandleEdit = (ptaStudent) => {
    this.setState({ selectedStudent: ptaStudent, showDetail: false, isAddingNew: false });
  };

  // 🗑 Xử lý khi bấm "Xóa"
  onPtaHandleDelete = (studentID) => {
    this.setState(prevState => {
      const updatedStudents = prevState.ptaStudents.filter(student => student.ptaID !== studentID);
      return { ptaStudents: updatedStudents, showDetail: false };
    }, this.filterStudents);
  };

  // ✅ Cập nhật sinh viên sau khi chỉnh sửa
  onPtaHandleUpdate = (updatedStudent) => {
    this.setState(prevState => {
      const updatedStudents = prevState.ptaStudents.map(student => 
        student.ptaID === updatedStudent.ptaID ? updatedStudent : student
      );
      return { ptaStudents: updatedStudents, selectedStudent: null, isAddingNew: false };
    }, this.filterStudents);
  };

  // 🆕 Xử lý khi bấm "Thêm mới"
  onPtaHandleAddNew = () => {
    this.setState({
      selectedStudent: null,
      showDetail: false,
      isAddingNew: true
    });
  };

  // 🆕 Xử lý khi lưu sinh viên mới
  onPtaHandleSaveNew = (newStudent) => {
    this.setState(prevState => ({
      ptaStudents: [...prevState.ptaStudents, newStudent],
      selectedStudent: null,
      isAddingNew: false
    }), this.filterStudents);
  };

  render() {
    return (
      <div>
        <h1 className='text-center'>Phạm Tuấn Anh - K23CNT3 - Mini Project</h1>
        <section className='container-fluid mt-3'>
          <div className="row">
            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">
                <PtaControl 
                  onPtaHandleAddNew={this.onPtaHandleAddNew} 
                  onPtaHandleSearch={this.onPtaHandleSearch} 
                />
                <PtaStudentList
                  renderPtaStudents={this.state.filteredStudents} 
                  onPtaHandleView={this.onPtaHandleView} 
                  onPtaHandleEdit={this.onPtaHandleEdit}
                  onPtaHandleDelete={this.onPtaHandleDelete}
                />
              </div>
            </div>

            <div className="col-5 grid-margin">
              {this.state.showDetail ? (
                <PtaStudentDetail 
                  student={this.state.selectedStudent} 
                  onClose={this.onPtaHandleCloseDetail} 
                />
              ) : (
                <PtaForm 
                  renderPtaStudent={this.state.selectedStudent} 
                  onPtaHandleUpdate={this.onPtaHandleUpdate} 
                  onPtaHandleSaveNew={this.onPtaHandleSaveNew} 
                  isAddingNew={this.state.isAddingNew} 
                />
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default PtaApp;