import React, { useState } from "react";
import "./App.css";

const Product = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    stok: 0,
  });

  const addProduct = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  function addProductBtn() {
    setData([...data, formData]);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "800px",
          justifyContent: "space-between",
        }}
      >
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={addProduct}
        />
        <input
          type="text"
          placeholder="price"
          name="price"
          onChange={addProduct}
        />
        <input
          type="text"
          placeholder="stok"
          name="stock"
          onChange={addProduct}
        />
      </div>
      <button onClick={addProductBtn}>Add Product</button>
      <div
        style={{
          display: "flex",
          width: "800px",
          justifyContent: "space-between",
        }}
      >
        <ul
          style={{
            display: "flex",
            width: "800px",
            justifyContent: "space-between",
            backgroundColor: "gray",
          }}
        >
          <li>name</li>
          <li>price</li>
          <li>stok</li>
        </ul>
        {data.map((item, index) => (
          <ul
            key={index}
            style={{
              display: "flex",
              width: "800px",
              justifyContent: "space-between",
              backgroundColor: "gray",
            }}
          >
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li>{item.stok}</li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default Product;
