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
  if  (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      }
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  //why this didnt work
  // const getProducts = () => {
  //   fetch(PRODUCTS_URL)
  //   .then(response => response.json)
  //   .then(json => {
  //     setProducts(json.docs)
  //   })
  // }

  // useEffect (()=> {
  //   getProducts()
  // },[]);

  return (
    <div className="App">
      <header>
        <button onClick={() => goTo(PAGE_CART)}>
          Go to Cart ({getItemsSum()})
        </button>
        <button onClick={() => goTo(PAGE_PRODUCTS)}> View Products </button>
      </header>
      {page === PAGE_PRODUCTS && <ProductList setCart={setCart} cart={cart} addToCart={addToCart} />}
      {page === PAGE_CART && <Cart cart={cart} setCart={setCart} addToCart={addToCart} />}
    </div>
  );
};

/// {page === PAGE_PRODUCTS &&  <ProductList addToCart = {() => addToCart(product)}/>} why not like that
