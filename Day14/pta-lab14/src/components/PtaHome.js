import React from 'react';

export default function PtaHome() {
  return (
    <div
      className="container text-center mt-5"
      style={{
        backgroundColor: '#2c2c2c', // Dark gray background
        color: '#ffffff', // White text
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
      }}
    >
      <h2
        className="text-primary mb-4"
        style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          fontFamily: 'Times New Roman',
          textShadow: '2px 2px 5px rgba(12, 12, 12, 0.91)',
          color: '#ffffff', // Ensure text is white
        }}
      >
        Chào mừng đến trang chủ
      </h2>

      <p
        className="lead text-info mb-4"
        style={{
          fontSize: '1.25rem',
          fontWeight: '500',
          color: '#ffffff', // Ensure text is white
        }}
      >
        Đây là trang chủ mua bán quần áo vest của Adam Store
      </p>

      <img
        src="https://cdn.haitrieu.com/wp-content/uploads/2022/05/Logo-Adam-Store-Black.png"
        alt="Logo"
        className="rounded-3 shadow-lg"
        style={{
          width: '40%',
          height: 'auto',
          transition: 'transform 0.3s ease-in-out',
          imageRendering: 'auto',
        }}
        onMouseOver={(e) => (e.target.style.transform = 'scale(1.1)')}
        onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
      />
    </div>
  );
}

