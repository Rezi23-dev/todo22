import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    stock: 0,
  });

  function getProduct() {
    fetch("https://coldenergy.ge/api/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }

  const inputchange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const addProduct = () => {
    fetch("https://coldenergy.ge/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => getProduct());
  };

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
          onChange={inputchange}
        />
        <input
          type="text"
          placeholder="price"
          name="price"
          onChange={inputchange}
        />
        <input
          type="text"
          placeholder="stock"
          name="stock"
          onChange={inputchange}
        />
      </div>
      <button onClick={addProduct}>Add Item</button>
      <div className="table">
        <div className="header">
          <ul
            style={{
              display: "flex",
              width: "800px",
              justifyContent: "space-between",
            }}
          >
            <li>name</li>
            <li>price</li>
            <li>stock</li>
            <li>delete</li>
          </ul>
        </div>
        <div className="newList">
          {data.map((item, index) => (
            <ul
              key={index}
              style={{
                display: "flex",
                width: "800px",
                justifyContent: "space-between",
              }}
            >
              <li>{item.name}</li>
              <li>{item.price}</li>
              <li>{item.stock}</li>
              <li>
                <button>Delete</button>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
