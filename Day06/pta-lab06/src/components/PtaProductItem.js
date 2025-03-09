import React from 'react';

export default function PtaProductItem({ product }) {
  return (
    <tr>
      <td>{product.ptaProductId}</td>
      <td>{product.ptaProductName}</td>
      <td>{product.ptaQuantity}</td>
      <td>${product.ptaPrice}</td>
      <td>
        <button className="btn btn-success mx-1">Sửa</button>
        <button className="btn btn-danger mx-1">Xóa</button>
      </td>
    </tr>
  );
}