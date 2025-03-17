import React from 'react';

export default function PtaListUser({ renderPtaUsers }) {
  const ptaElements = renderPtaUsers.map((ptaItem, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{ptaItem.id}</td>
      <td>{ptaItem.ptaFullName}</td>
      <td>{ptaItem.ptaUserName}</td>
      <td>{ptaItem.ptaPass}</td>
    </tr>
  ));

  return (
    <div
      style={{
        padding: '30px',
        backgroundColor: '#f4f7fa',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          color: '#333',
          fontSize: '2rem',
          marginBottom: '20px',
          fontWeight: '600',
        }}
      >
        Danh Sách Tài Khoản
      </h2>

      <table
        className="table table-bordered"
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          textAlign: 'center',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <thead
          style={{
            backgroundColor: '#28a745',
            color: '#fff',
            fontSize: '1.1rem',
            textTransform: 'uppercase',
          }}
        >
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Full Name</th>
            <th>User Name</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody
          style={{
            backgroundColor: '#fff',
            color: '#333',
            fontSize: '1rem',
          }}
        >
          {ptaElements}
        </tbody>
      </table>

      {/* Optional: Add pagination or a button to go back to the homepage */}
      <div
        style={{
          marginTop: '30px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
