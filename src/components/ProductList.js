import React, { useEffect, useState } from "react";

export const ProductList = ({ addToCart }) => {
  const PRODUCTS_URL =
    "https://falconx-development.coffee4tech.net/products/public?country=GB";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(PRODUCTS_URL)
      .then((response) => response.json())
      .then((json) => setProducts(json.docs));
  }, []);
  console.log(products);

  return (
    <>
      <h1 className="position-center highlight">Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h3 className="product-title highlight">{product.name}</h3>
            <p>{product.h2}</p>
            <div className="flex-wrap">
              <p>${product.price}</p>
              <button className="primary-button width-50" onClick={() => addToCart(product)}>
                Add to card
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
