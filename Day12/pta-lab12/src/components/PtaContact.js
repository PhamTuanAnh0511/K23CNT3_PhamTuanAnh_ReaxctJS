import React from 'react';

export default function PtaContact() {
  return (
    <div
      style={{
        maxWidth: '500px',
        margin: '0 auto',
        padding: '30px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: '#333',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          color: '#4CAF50',
          fontSize: '28px',
          marginBottom: '25px',
          fontWeight: '600',
        }}
      >
        Thông tin liên hệ
      </h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          fontSize: '18px',
          lineHeight: '1.6',
        }}
      >
        <p>
          <strong style={{ color: '#333' }}>Họ và tên:</strong> Phạm Tuấn Anh
        </p>
        <p>
          <strong style={{ color: '#333' }}>Mã sinh viên:</strong> 2310900003
        </p>
        <p>
          <strong style={{ color: '#333' }}>Lớp:</strong> K23CNT3
        </p>
        <p>
          <strong style={{ color: '#333' }}>Email:</strong>{' '}
          <a href="mailto:Sktkgame69@gmail.com" style={{ color: '#4CAF50' }}>
            Sktkgame69@gmail.com
          </a>
        </p>
        <p>
          <strong style={{ color: '#333' }}>Điện thoại:</strong>{' '}
          <a href="tel:0984551682" style={{ color: '#4CAF50' }}>
            0984551682
          </a>
        </p>
        <p>
          <strong style={{ color: '#333' }}>Facebook:</strong>{' '}
          <a
            href="https://www.facebook.com/pham.tuan.290500"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#4CAF50' }}
          >
            Phạm Tuấn
          </a>
        </p>
      </div>
    </div>
  );
}
