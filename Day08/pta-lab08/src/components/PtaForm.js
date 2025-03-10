import React, { Component } from 'react';

export default class PtaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ptaID: '',
      ptaStudentName: '',
      ptaAge: '',
      ptaGender: 'Nam',
      ptaBirthday: '',
      ptaBirthPlace: 'HN',
      ptaAddress: ''
    };
  }

  // Cập nhật form khi nhận dữ liệu từ props
  componentDidUpdate(prevProps) {
    if (prevProps.renderPtaStudent !== this.props.renderPtaStudent) {
      if (this.props.renderPtaStudent) {
        this.setState({ ...this.props.renderPtaStudent });
      } else {
        // Nếu đang ở chế độ "Thêm mới", reset form
        this.setState({
          ptaID: '',
          ptaStudentName: '',
          ptaAge: '',
          ptaGender: 'Nam',
          ptaBirthday: '',
          ptaBirthPlace: 'HN',
          ptaAddress: ''
        });
      }
    }
  }

  // Xử lý thay đổi dữ liệu input
  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Gửi dữ liệu khi nhấn "Lưu"
  handleSubmit = (event) => {
    event.preventDefault();
    const { ptaID, ...otherState } = this.state;

    if (!ptaID || ptaID.trim() === "") {
        alert("Vui lòng nhập mã sinh viên (ptaID).");
        return;
    }

    if (this.props.isAddingNew) {
        this.props.onPtaHandleSaveNew({ ptaID, ...otherState });
    } else {
        this.props.onPtaHandleUpdate({ ptaID, ...otherState });
    }
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{this.props.isAddingNew ? "Thêm sinh viên mới" : "Chỉnh sửa thông tin"}</h3>
          <form onSubmit={this.handleSubmit}>
            
            {/* Nhập mã sinh viên khi thêm mới */}
            {this.props.isAddingNew && (
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" name="ptaID" value={this.state.ptaID} onChange={this.handleChange} required />
                </div>
              </div>
            )}
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="ptaStudentName" value={this.state.ptaStudentName} onChange={this.handleChange} required />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input type="number" className="form-control" name="ptaAge" value={this.state.ptaAge} onChange={this.handleChange} required />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select className="form-control" name="ptaGender" value={this.state.ptaGender} onChange={this.handleChange}>
                  <option>Nam</option>
                  <option>Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input type="date" className="form-control" name="ptaBirthday" value={this.state.ptaBirthday} onChange={this.handleChange} required />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select className="form-control" name="ptaBirthPlace" value={this.state.ptaBirthPlace} onChange={this.handleChange}>
                  <option value="HN">Hà Nội</option>
                  <option value="TpHCM">TP. Hồ Chí Minh</option>
                  <option value="ĐN">Đà Nẵng</option>
                  <option value="QN">Quảng Ninh</option>
                  <option value="HD">Hải Dương</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea className="form-control" name="ptaAddress" value={this.state.ptaAddress} onChange={this.handleChange} required />
              </div>
            </div>
            <button type="submit" className="btn btn-primary me-2">{this.props.isAddingNew ? "Thêm" : "Lưu"}</button>
          </form>
        </div>
      </div>
    );
  }
}