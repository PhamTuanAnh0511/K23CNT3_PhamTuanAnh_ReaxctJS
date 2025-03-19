import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function PtaEditUser() {
  const { id } = useParams(); // Lấy ID người dùng từ URL
  const [user, setUser] = useState(null); // Để lưu trữ dữ liệu người dùng
  const navigate = useNavigate(); // Để điều hướng người dùng sau khi lưu

  // Lấy dữ liệu người dùng theo ID
  useEffect(() => {
    axios
      .get(`https://67da84ca35c87309f52ce0a0.mockapi.io/K23cnt3_PhamTuanAnh/pta_users/${id}`)
      .then((response) => {
        setUser(response.data); // Lưu dữ liệu vào state
      })
      .catch((error) => {
        console.error("Có lỗi khi lấy dữ liệu người dùng!", error); // Xử lý lỗi
      });
  }, [id]);

  // Xử lý khi người dùng gửi form để cập nhật dữ liệu
  const handleSubmit = (e) => {
    e.preventDefault(); // Ngừng hành vi gửi form mặc định

    // Gửi dữ liệu người dùng đã cập nhật đến API
    axios
      .put(`https://67da84ca35c87309f52ce0a0.mockapi.io/K23cnt3_PhamTuanAnh/pta_users/${id}`, user)
      .then(() => {
        // Nếu thành công, điều hướng về danh sách người dùng
        navigate('/list-user');
      })
      .catch((error) => {
        console.error("Lỗi khi lưu thay đổi", error); // Xử lý lỗi
      });
  };

  // Render form để chỉnh sửa dữ liệu người dùng
  return (
    <div className="container mt-5" style={{ backgroundColor: '#1e1e1e', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)', color: '#fff' }}>
      <h2 className="text-center mb-4" style={{ color: '#fff' }}>Edit User</h2>
      {user ? (
        <form onSubmit={handleSubmit} className="p-5 border rounded-3 shadow-lg" style={{ backgroundColor: '#333' }}>
          <div className="mb-3">
            <label htmlFor="pta_name" className="form-label">Name</label>
            <input
              type="text"
              id="pta_name"
              className="form-control"
              value={user.pta_name}
              onChange={(e) => setUser({ ...user, pta_name: e.target.value })}
              style={{ backgroundColor: '#444', color: '#fff', borderColor: '#555' }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pta_email" className="form-label">Email</label>
            <input
              type="email"
              id="pta_email"
              className="form-control"
              value={user.pta_email}
              onChange={(e) => setUser({ ...user, pta_email: e.target.value })}
              style={{ backgroundColor: '#444', color: '#fff', borderColor: '#555' }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pta_phone" className="form-label">Phone</label>
            <input
              type="text"
              id="pta_phone"
              className="form-control"
              value={user.pta_phone}
              onChange={(e) => setUser({ ...user, pta_phone: e.target.value })}
              style={{ backgroundColor: '#444', color: '#fff', borderColor: '#555' }}
            />
          </div>

          {/* Radio buttons for Active */}
          <div className="mb-3">
            <label className="form-label">Active</label>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                name="pta_active"
                id="pta_active_hd"
                value="true"
                checked={user.pta_active === true}
                onChange={() => setUser({ ...user, pta_active: true })}
              />
              <label className="form-check-label" htmlFor="pta_active_hd">
                Hoạt Động
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                name="pta_active"
                id="pta_active_kh"
                value="false"
                checked={user.pta_active === false}
                onChange={() => setUser({ ...user, pta_active: false })}
              />
              <label className="form-check-label" htmlFor="pta_active_kh">
                Khóa
              </label>
            </div>
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary btn-lg" style={{ backgroundColor: '#007bff', borderColor: '#0056b3' }}>Save Changes</button>
          </div>
        </form>
      ) : (
        <p>Loading user data...</p>
      )}

      {/* Back button */}
      <div className="d-flex justify-content-center mt-4">
        <button onClick={() => navigate('/list-user')} className="btn btn-secondary" style={{ backgroundColor: '#6c757d', borderColor: '#5a6268' }}>
          Back to List
        </button>
      </div>
    </div>
  );
}
