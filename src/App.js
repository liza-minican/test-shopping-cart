import React, { useEffect, useState } from "react";
import { ProductList } from "components/ProductList";
import { Cart } from "components/Cart";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

export const App = () => {
  const [page, setPage] = useState(PAGE_PRODUCTS);
  const [cart, setCart] = useState(cartFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const goTo = (changePage) => {
    setPage(changePage);
  };

  const getItemsSum = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0);
  };

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => product.id === item.id);
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  return (
    <div className="App">
      {page === PAGE_PRODUCTS && (
        <>
          <header className="header-buttons">
            <button
              className="primary-button header-button"
              onClick={() => goTo(PAGE_CART)}
            >
              Go to Cart ({getItemsSum()})
            </button>
          </header>
          <ProductList setCart={setCart} cart={cart} addToCart={addToCart} />
        </>
      )}
      {page === PAGE_CART && (
        <>
          <header className="header-buttons">
            <button
              className="primary-button header-button"
              onClick={() => goTo(PAGE_PRODUCTS)}
            >
              {" "}
              View Products{" "}
            </button>
          </header>
          <Cart cart={cart} setCart={setCart} addToCart={addToCart} />
        </>
      )}
    </div>
  );
};
