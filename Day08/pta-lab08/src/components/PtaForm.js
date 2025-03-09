import React, { Component } from 'react';

export default class PtaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ptaID: '',
      ptaStudentName: '',
      ptaAge: '',
      ptaGender: '',
      ptaBirthday: '',
      ptaBrithPlace: '',
      ptaAddress: ''
    };
  }

  // Cập nhật state khi props thay đổi
  componentDidUpdate(prevProps) {
    if (prevProps.renderPtaStudent !== this.props.renderPtaStudent && this.props.renderPtaStudent) {
      this.setState({ ...this.props.renderPtaStudent });
    }
  }

  // Xử lý thay đổi dữ liệu input
  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Gửi dữ liệu cập nhật khi nhấn "Lưu"
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onPtaHandleUpdate(this.state);
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Thông tin sinh viên</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Mã sinh viên</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="ptaID" value={this.state.ptaID} readOnly />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="ptaStudentName" value={this.state.ptaStudentName} onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="ptaAge" value={this.state.ptaAge} onChange={this.handleChange} />
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
                <input className="form-control" name="ptaBirthday" value={this.state.ptaBirthday} onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select className="form-control" name="ptaBrithPlace" value={this.state.ptaBrithPlace} onChange={this.handleChange}>
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
                <textarea className="form-control" name="ptaAddress" value={this.state.ptaAddress} onChange={this.handleChange} />
              </div>
            </div>
            <button type="submit" className="btn btn-primary me-2">Lưu</button>
          </form>
        </div>
      </div>
    );
  }
}