import React, { useState } from "react";
import PtaProductList from "./components/PtaProductList";
import PtaProductAdd from "./components/PtaProductAdd";

const PtaApp = () => {
  const [products, setProducts] = useState([
    { ptapid: "2310900003", ptapname: "Phạm Tuấn Anh", ptapquantity: "10", ptapprice: "1000000" },
    { ptapid: "230002", ptapname: "Phân Khối Lớn ", ptapquantity: "20", ptapprice: "800000" },
    { ptapid: "230003", ptapname: "Ô tô ", ptapquantity: "30", ptapprice: "500000" },
  ]);

  // Thêm sản phẩm mới
  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  // Xóa sản phẩm
  const removeProduct = (ptapid) => {
    setProducts(products.filter(product => product.ptapid !== ptapid));
  };

  // Cập nhật sản phẩm
  const updateProduct = (updatedProduct) => {
    setProducts(products.map(product => (product.ptapid === updatedProduct.ptapid ? updatedProduct : product)));
  };

  return (
    <div className="container mt-4">
      <h1 className="text-primary text-center">Quản lý Sản Phẩm</h1>
      <PtaProductList products={products} removeProduct={removeProduct} updateProduct={updateProduct} />
      <PtaProductAdd addProduct={addProduct} />
    </div>
  );
};
export default PtaApp;