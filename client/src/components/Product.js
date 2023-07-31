import React from "react";

export default function Product() {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [Error, setError] = React.useState(false);

  async function addProduct() {
    if (!name || !price || !category || !company || !category || !company) {
      setError(true);
      return false;
    }
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
  }
  return (
    <>
      <div className="product">
        <h1>Add Product</h1>
        <input
          type="text"
          value={name}
          placeholder="Enter product name"
          onChange={(e) => setName(e.target.value)}
          className="input-field"
        />
        {Error && !name && <span className="nameError">Enter name please</span>}
        <input
          type="text"
          value={price}
          placeholder="Enter product price"
          onChange={(e) => setPrice(e.target.value)}
          className="input-field"
        />
        {Error && !price && (
          <span className="nameError">Enter price please</span>
        )}
        <input
          type="text"
          value={category}
          placeholder="Enter product category"
          onChange={(e) => setCategory(e.target.value)}
          className="input-field"
        />
        {Error && !category && (
          <span className="nameError">Enter category please</span>
        )}
        <input
          type="text"
          value={company}
          placeholder="Enter Company"
          onChange={(e) => setCompany(e.target.value)}
          className="input-field"
        />
        {Error && !company && (
          <span className="nameError">Enter company please</span>
        )}
        <button onClick={addProduct} className="submit-btn">
          Add Product
        </button>
      </div>
    </>
  );
}
