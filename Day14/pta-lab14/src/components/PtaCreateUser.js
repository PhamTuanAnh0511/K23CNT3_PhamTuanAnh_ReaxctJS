import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PtaCreateUser() {
    // Khởi tạo state
    const [pta_name, setPta_name] = useState('');
    const [pta_email, setPta_email] = useState('');
    const [pta_phone, setPta_phone] = useState('');
    const [pta_active, setPta_active] = useState(true);
    const [successMessage, setSuccessMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // API endpoint
    const ptaCreateUser = "https://67da84ca35c87309f52ce0a0.mockapi.io/K23cnt3_PhamTuanAnh/pta_users";

    // Handle form submission
    const ptaHandleSubmit = (ev) => {
        ev.preventDefault();
        setIsSubmitting(true);

        let ptaNewUser = { pta_name, pta_email, pta_phone, pta_active };

        // Send data to API
        axios
            .post(ptaCreateUser, ptaNewUser)
            .then((pta_response) => {
                console.log(pta_response.data);
                setSuccessMessage('User created successfully!');
                setPta_name('');
                setPta_email('');
                setPta_phone('');
                setPta_active(true);
                setIsSubmitting(false);
            })
            .catch((error) => {
                console.log("Lỗi", error);
                setIsSubmitting(false);
            });
    };

    return (
        <div className="container mt-4" style={{ backgroundColor: '#2c2c2c', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', color: '#fff' }}>
            <form onSubmit={ptaHandleSubmit}>
                <h2 className="mb-4" style={{ textAlign: 'center', color: '#fff' }}>Thêm Mới User</h2>

                {/* Success message */}
                {successMessage && (
                    <div className="alert alert-success" role="alert">
                        {successMessage}
                    </div>
                )}

                <div className="mb-3">
                    <label htmlFor="pta_name" className="form-label">Name</label>
                    <input
                        type="text"
                        name="pta_name"
                        id="pta_name"
                        placeholder="Vui lòng nhập tên của bạn"
                        className="form-control"
                        onChange={(ev) => setPta_name(ev.target.value)}
                        value={pta_name}
                        required
                        style={{ backgroundColor: '#333', color: '#fff', borderColor: '#444' }}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="pta_email" className="form-label">Email</label>
                    <input
                        type="email"
                        name="pta_email"
                        id="pta_email"
                        placeholder="Vui lòng nhập email của bạn"
                        className="form-control"
                        onChange={(ev) => setPta_email(ev.target.value)}
                        value={pta_email}
                        required
                        style={{ backgroundColor: '#333', color: '#fff', borderColor: '#444' }}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="pta_phone" className="form-label">Phone</label>
                    <input
                        type="text"
                        name="pta_phone"
                        id="pta_phone"
                        placeholder="Vui lòng nhập số điện thoại của bạn"
                        className="form-control"
                        onChange={(ev) => setPta_phone(ev.target.value)}
                        value={pta_phone}
                        required
                        style={{ backgroundColor: '#333', color: '#fff', borderColor: '#444' }}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Active</label>
                    <div className="form-check">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="pta_active"
                            id="pta_active_hd"
                            value="true"
                            checked={pta_active === true}
                            onChange={() => setPta_active(true)}
                        />
                        <label className="form-check-label" htmlFor="pta_active_hd">Hoạt Động</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="pta_active"
                            id="pta_active_kh"
                            value="false"
                            checked={pta_active === false}
                            onChange={() => setPta_active(false)}
                        />
                        <label className="form-check-label" htmlFor="pta_active_kh">Khóa</label>
                    </div>
                </div>

                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Create'}
                    </button>
                    <Link to={'/list-user'}>
                        <button type="button" className="btn btn-info">Back</button>
                    </Link>
                </div>
            </form>
        </div>
    );
}
