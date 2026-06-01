import React, { useEffect, useState } from "react";
import "./App.css";

const Product = () => {
  const [data, setData] = useState([]);
  const [formdata, setFormdata] = useState({
    name: "",
    price: 0,
    stock: 0,
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
    console.log(formdata);
  };

  function getProduct() {
    fetch("https://coldenergy.ge/api/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }

  function addProduct() {
    fetch("https://coldenergy.ge/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    }).then((res) => getProduct());
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div className="inputBox">
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={inputChange}
        />
        <input
          type="text"
          placeholder="name"
          name="price"
          onChange={inputChange}
        />
        <input
          type="text"
          placeholder="name"
          name="stock"
          onChange={inputChange}
        />
        <button onClick={addProduct}>ADD</button>
      </div>
      <ul className="table-header">
        <li>Name</li>
        <li>Price</li>
        <li>Stock</li>
        <li>Action</li>
      </ul>

      {data.map((item, index) => (
        <ul key={index} className="table-row">
          <li>{item.name}</li>
          <li>{item.price} ₾</li>
          <li>{item.stock}</li>
          <li>
            <button className="delete-btn">Delete</button>
          </li>
        </ul>
      ))}
    </>
  );
};

export default Product;
