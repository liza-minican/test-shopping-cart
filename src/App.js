import React, { useEffect, useState} from 'react';
import { ProductList } from 'components/ProductList'
import { Cart } from 'components/Cart'

const PAGE_PRODUCTS = 'products'
const PAGE_CART = 'cart'

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]' )

export const App = () => {

  // const PRODUCTS_URL = "https://falconx-development.coffee4tech.net/products/public?country=GB"
  // const [products, setProducts] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);
  const [cart, setCart] = useState(cartFromLocalStorage );

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])

const goTo = (changePage) => {
  setPage(changePage)
}

const getItemsSum = () => {
  return cart.reduce((sum, {quantity} ) => sum + quantity,0)
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
        <button onClick = {() => goTo(PAGE_CART)} >Go to Cart ({getItemsSum()})</button>
        <button onClick = {() => goTo(PAGE_PRODUCTS)} > View Products </button>
      </header>
      {page === PAGE_PRODUCTS &&  (<ProductList setCart = {setCart} cart={cart}/>)}
      {page === PAGE_CART &&  (
        <Cart 
          cart = {cart}
          setCart = {setCart}
          />
          )}
        </div>
  )
    }

    // {page === PAGE_PRODUCTS &&  <ProductList addToCart = {() => addToCart(product)}/>} why not like that