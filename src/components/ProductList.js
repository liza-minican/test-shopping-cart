import React, { useEffect, useState} from 'react';

 export const ProductList = ({cart, setCart}) => {

    const PRODUCTS_URL = "https://falconx-development.coffee4tech.net/products/public?country=GB"
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch(PRODUCTS_URL)
        .then(response => response.json())
        .then(json => setProducts(json.docs));
      }
       ,[])
       console.log(products);
       const addToCart = (product) => {
        let newCart = [...cart];  
        let itemInCart = newCart.find((item) => product.name === item.name);
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
      
return(
    <>
    <h1>Products</h1>
    <div className = "product-list">
      {products.map((product) => (
    <div className ="product-card" key={product.id} >
      <h3 className = "product-title">{product.name}</h3>
      <p  className = "product-description">  
       {product.h2}       
       </p>
       <div className = "flex-wrap-buy">
       <p className = "product-price">${product.price}</p>
       <button className = "buy-button" onClick = {()=> addToCart(product)} >Add to card</button>
    </div>
    </div>
      ))
      }
      </div> 
      </>
)
 }