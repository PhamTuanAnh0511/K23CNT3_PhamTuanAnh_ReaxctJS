// src/components/PtaProducts.js
import React, { useState } from 'react';

const PtaProducts = () => {
  // Danh sách sản phẩm mẫu
  const [products] = useState([
    {
      id: 'SP001',
      name: 'Sơ mi đen trơntrơn',
      price: 150000,
      imageUrl: 'https://product.hstatic.net/1000333436/product/smc118_e94f93c6367e4d509f54a66c0ce4dd46_master.jpg',
    },
    {
      id: 'SP002',
      name: 'Vest nhung đen lấp lánh',
      price: 8000000,
      imageUrl: 'https://product.hstatic.net/1000333436/product/v41_d7ba6c9a5f8e4c15b1e18a9627781316_grande.jpg',
    },
    {
      id: 'SP003',
      name: 'Măng tô đen trơn 2 khuy',
      price: 1200000,
      imageUrl: '	https://product.hstatic.net/1000333436/product/0__2__ac2ae90202114cb89855279b953e81e6_grande.jpg',
    },
  ]);

  return (
    <div>
      <h2>Sản Phẩm</h2>
      <p>Danh sách sản phẩm của chúng tôi:</p>
      
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card" style={{ marginBottom: '20px' }}>
              <img
                src={product.imageUrl}
                className="card-img-top"
                alt={product.name}
                style={{ maxHeight: '700px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text" style={{ fontWeight: 'bold' }}>
                  {product.price.toLocaleString()} VND
                </p>
                <a href="#" className="btn btn-primary">
                  Mua Ngay
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PtaProducts;
