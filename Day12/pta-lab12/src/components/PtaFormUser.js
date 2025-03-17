import React, { useState } from 'react';

export default function PtaFormUser({ onPtaAddNew }) {
  const [id, setPtaId] = useState('');
  const [ptaFullName, setPtaFullName] = useState('');
  const [ptaUserName, setPtaUserName] = useState('');
  const [ptaPass, setPtaPass] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const ptaHandleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!id || !ptaFullName || !ptaUserName || !ptaPass) {
      setError('Please fill in all fields.');
      setSuccessMessage('');
      return;
    }

    if (ptaPass.length < 6) {
      setError('Password must be at least 6 characters.');
      setSuccessMessage('');
      return;
    }

    setError('');
    setSuccessMessage('Account created successfully!'); // Show success message

    // Add the new user
    onPtaAddNew({ id, ptaFullName, ptaUserName, ptaPass });

    // Reset the form after submission
    setPtaId('');
    setPtaFullName('');
    setPtaUserName('');
    setPtaPass('');
  };

  return (
    <div
      style={{
        maxWidth: '500px',
        margin: '0 auto',
        padding: '30px',
        borderRadius: '8px',
        backgroundColor: '#f8f9fa',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>
        Create New User
      </h2>
      <form onSubmit={ptaHandleSubmit}>
        {error && (
          <p style={{ color: 'red', textAlign: 'center', fontSize: '16px' }}>
            {error}
          </p>
        )}

        {successMessage && (
          <p style={{ color: 'green', textAlign: 'center', fontSize: '16px' }}>
            {successMessage}
          </p>
        )}

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="id" style={{ display: 'block', fontWeight: 'bold' }}>
            Mã sinh viên:
          </label>
          <input
            type="text"
            name="id"
            value={id}
            onChange={(ev) => setPtaId(ev.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              fontSize: '16px',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="ptaFullName" style={{ display: 'block', fontWeight: 'bold' }}>
            Họ và tên:
          </label>
          <input
            type="text"
            name="ptaFullName"
            value={ptaFullName}
            onChange={(ev) => setPtaFullName(ev.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              fontSize: '16px',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="ptaUserName" style={{ display: 'block', fontWeight: 'bold' }}>
            Tài khoản:
          </label>
          <input
            type="text"
            name="ptaUserName"
            value={ptaUserName}
            onChange={(ev) => setPtaUserName(ev.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              fontSize: '16px',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="ptaPass" style={{ display: 'block', fontWeight: 'bold' }}>
            Mật khẩu:
          </label>
          <input
            type="password"
            name="ptaPass"
            value={ptaPass}
            onChange={(ev) => setPtaPass(ev.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              fontSize: '16px',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            type="submit"
            style={{
              padding: '12px 25px',
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#218838')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#28a745')}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
