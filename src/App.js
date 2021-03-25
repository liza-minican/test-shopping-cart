import React, { useEffect, useState} from 'react';
import { ProductList } from 'components/ProductList'
import { Cart } from 'components/Cart'

const PAGE_PRODUCTS = 'products'
const PAGE_CART = 'cart'

export const App = () => {

  // const PRODUCTS_URL = "https://falconx-development.coffee4tech.net/products/public?country=GB"
  // const [products, setProducts] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);
  const [cart, setCart] = useState([]);

const addToCart = (product) => {
  console.log("add to cart")
  setCart([...cart,{...product}]);
};

const removeFromCart = (productToRemove) => {
  console.log("remove to cart")
  setCart(cart.filter((product) => product !== productToRemove));
};

const removeAll = () => {
  console.log("remove all")
  setCart([]);
};

const goTo = (changePage) => {
  setPage(changePage)
}

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
        <button onClick = {() => goTo(PAGE_CART)} >Go to Cart ({cart.length})</button>
        <button onClick = {() => goTo(PAGE_PRODUCTS)} > View Products </button>
      </header>
      {page === PAGE_PRODUCTS &&  <ProductList addToCart = {addToCart}/>}
      {page === PAGE_CART &&  <Cart removeFromCart = {removeFromCart} cart = {cart}
      removeAll = {removeAll}/>}
        </div>
  )
    }

    // {page === PAGE_PRODUCTS &&  <ProductList addToCart = {() => addToCart(product)}/>} why not like that