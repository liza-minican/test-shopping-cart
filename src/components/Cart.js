import React from 'react';

export const Cart = ({cart, removeFromCart, removeAll}) => {
    
    const getSum = () => {
        //cart.map(item => item.price).reduce((prev, curr) => prev + curr,0)
        return cart.reduce((sum, { price }) => sum + price, 0)
        // cart.reduce((a, b) => a + b.price,
        // 0
    }
    return (
        <>
        <h1>Cart</h1>
        {cart.length > 0 && (
          <button onClick = {() => removeAll()}>Clear cart</button>
          )
}
        <div className = "product-list">
          {cart.map((product) => (
        <div className ="product-card" key={product.id} >
          <h3 className = "product-title">{product.name}</h3>
          <p  className = "product-description">  
           {product.h2}       
           </p>
           <div className = "flex-wrap-buy">
           <p className = "product-price">${product.price}</p>
           <button className = "remove-button" onClick = {() => removeFromCart(product)}> Remove</button>
        </div>
        </div>
          ))
          }
          </div> 
          <div>Total Cost: ${getSum()} </div>
          </>
    )
}