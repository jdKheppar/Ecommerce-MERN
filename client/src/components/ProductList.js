import React from "react";

export default function ProductList() {
  const [productsList, setProductsList] = React.useState([]);

  React.useEffect(() => {
    getProducts();
  }, []);
  async function getProducts() {
    try {
      let response = await fetch("http://localhost:5000/products");
      if (response) {
        let data = await response.json();
        setProductsList(data);
        console.log("data", data);

        //set products list to the fetched data here...
      } else {
        throw new Error("Error fetching Products");
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }
  return (
    <div className="product-list">
      <h1>Product List</h1>
      <ul>
        <li>Sr No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
      </ul>
      {productsList.map((product, index) => (
        <ul>
          <li>{index + 1}</li>
          <li>{product.name}</li>
          <li>$ {product.price}</li>
          <li>{product.category}</li>
        </ul>
      ))}
    </div>
  );
}
