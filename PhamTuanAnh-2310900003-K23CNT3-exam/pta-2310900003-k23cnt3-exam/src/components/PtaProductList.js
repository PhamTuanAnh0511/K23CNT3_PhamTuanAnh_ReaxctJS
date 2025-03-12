import React, { useState } from "react";

const PtaProductList = ({ products, removeProduct, updateProduct }) => {
  const [editProductId, setEditProductId] = useState(null);
  const [updatedInfo, setUpdatedInfo] = useState({ ptapname: "", ptapquantity: "", ptapprice: "" });

  // Bắt đầu chỉnh sửa
  const handleEdit = (product) => {
    setEditProductId(product.ptapid);
    setUpdatedInfo({ ptapname: product.ptapname, ptapquantity: product.ptapquantity, ptapprice: product.ptapprice });
  };

  // Lưu thông tin sau khi chỉnh sửa
  const handleUpdate = () => {
    updateProduct({ ptapid: editProductId, ...updatedInfo });
    setEditProductId(null); // Đóng chế độ chỉnh sửa
  };

  return (
    <div className="card p-3 mt-3" style={{ border: "3px solid #ff1493", borderRadius: "10px" }}>
      <h2 className="text-secondary text-center">Danh sách xe</h2>
      <ul className="list-group">
        {products.map((product) => (
          <li key={product.ptapid} className="list-group-item d-flex justify-content-between align-items-center">
            {editProductId === product.ptapid ? (
              // Hiển thị form chỉnh sửa
              <>
                <input
                  type="text"
                  className="form-control me-2"
                  value={updatedInfo.ptapname}
                  onChange={(e) => setUpdatedInfo({ ...updatedInfo, ptapname: e.target.value })}
                />
                <input
                  type="number"
                  className="form-control me-2"
                  value={updatedInfo.ptapquantity}
                  onChange={(e) => setUpdatedInfo({ ...updatedInfo, ptapquantity: e.target.value })}
                />
                <input
                  type="number"
                  className="form-control me-2"
                  value={updatedInfo.ptapprice}
                  onChange={(e) => setUpdatedInfo({ ...updatedInfo, ptapprice: e.target.value })}
                />
                <button className="btn btn-success me-2" onClick={handleUpdate}>Lưu</button>
                <button className="btn btn-secondary" onClick={() => setEditProductId(null)}>Hủy</button>
              </>
            ) : (
              // Hiển thị thông tin sản phẩm
              <>
                {product.ptapid} - {product.ptapname} - Số lượng: {product.ptapquantity} - Giá: {product.ptapprice}đ
                <div className="d-flex gap-1">
                  <button className="btn btn-warning me-2" onClick={() => handleEdit(product)}>Sửa</button>
                  <button className="btn btn-danger" onClick={() => removeProduct(product.ptapid)}>Xóa</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PtaProductList;