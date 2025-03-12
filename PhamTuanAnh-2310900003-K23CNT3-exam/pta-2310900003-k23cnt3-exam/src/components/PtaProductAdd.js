

import React, { useState } from "react";

const PtaProductAdd = ({ addProduct }) => {
  const [newProduct, setNewProduct] = useState({ ptapid: "", ptapname: "", ptapquantity: "", ptapprice: "" });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newProduct.ptapid && newProduct.ptapname && newProduct.ptapquantity && newProduct.ptapprice) {
      addProduct(newProduct);
      setNewProduct({ ptapid: "", ptapname: "", ptapquantity: "", ptapprice: "" });
    }
  };

  return (
    <div className="card p-3 mt-3 text-center" style={{ border: "3px solid #ff1493", borderRadius: "10px" }}>
      <h2 style={{ textAlign: 'center', color: 'black' }}>Thêm Sản Phẩm</h2>
      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input type="text" className="form-control" name="ptapid" placeholder="ID" value={newProduct.ptapid} onChange={handleChange} required />
        <input type="text" className="form-control" name="ptapname" placeholder="Tên Sản Phẩm" value={newProduct.ptapname} onChange={handleChange} required />
        <input type="number" className="form-control" name="ptapquantity" placeholder="Số Lượng" value={newProduct.ptapquantity} onChange={handleChange} required />
        <input type="number" className="form-control" name="ptapprice" placeholder="Giá" value={newProduct.ptapprice} onChange={handleChange} required />
        <button type="submit" className="btn btn-primary">Thêm</button>
      </form>
    </div>
  );
};

export default PtaProductAdd;