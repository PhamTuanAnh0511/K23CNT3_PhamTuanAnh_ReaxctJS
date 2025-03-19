import React from 'react';

export default function PtaHome() {
  return (
    <div 
      className="container text-center mt-5 py-5" 
      style={{
        backgroundColor: '#121212', 
        color: 'white', 
        borderRadius: '15px', 
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)', 
        transition: 'all 0.3s ease'
      }}
    >
      <h2 
        className="mb-4" 
        style={{
          fontFamily: 'Times New Roman',
          fontSize: '3rem', 
          fontWeight: 'bold', 
          textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)', 
          transition: 'text-shadow 0.3s ease-in-out'
        }}
      >
        Welcome to Home!
      </h2>
      
      <p 
        className="lead mb-4" 
        style={{
          fontSize: '1.25rem', 
          fontWeight: '500', 
          opacity: 0.8, 
          transition: 'opacity 0.3s ease'
        }}
      >
        Mang đến sự thoải mái và lịch lãm cho quý ông
      </p>

      <img 
        src="https://cdn.haitrieu.com/wp-content/uploads/2022/05/Logo-Adam-Store-Black.png"
        alt="vest"
        className="rounded-3 shadow-lg"
        style={{
          width: '30%', 
          height: '400px', 
          transition: 'transform 0.3s ease-in-out', 
          cursor: 'pointer',
        }}
        onMouseOver={(e) => e.target.style.transform = "scale(1.1)"}
        onMouseOut={(e) => e.target.style.transform = "scale(1)"}
      />

      <div 
        className="d-flex justify-content-center mt-4"
        style={{
          fontSize: '1.2rem',
          fontWeight: '600',
          letterSpacing: '1px'
        }}
      >
        <p style={{ color: '#f0f0f0', opacity: 0.7 }}>Thoải mái lựa chọn và xem hàng!</p>
      </div>
    </div>
  );
}
