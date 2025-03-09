import React from 'react';
import PtaProductItem from './PtaProductItem';
import PtaProductData from './PtaProductData';

export default function PtaProductList() {
  return (
    <div className="container">
      <h2 className="text-center my-3">Danh Sách Sản Phẩm</h2>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Mã Sản Phẩm</th>
            <th>Tên Sản Phẩm</th>
            <th>Số Lượng</th>
            <th>Giá</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {PtaProductData.map((product) => (
            <PtaProductItem key={product.ptaProductId} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}