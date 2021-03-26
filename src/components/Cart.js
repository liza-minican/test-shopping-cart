import React from 'react';

export const Cart = ({cart,setCart, addToCart}) => {

    
    const getSum = () => {
        //cart.map(item => item.price).reduce((prev, curr) => prev + curr,0)
        return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0)
        // cart.reduce((a, b) => a + b.price,
        // 0
    }
    const removeFromCart = (productToRemove) => {
      console.log("remove to cart")
      setCart(cart.filter((product) => product !== productToRemove));
    };

      const decreaseAmountInCart = (productToRemove) => {
      console.log("remove to cart")
      let itemInCart = cart.find((product) => product.id === productToRemove.id)
      if(itemInCart.quantity === 1){
        setCart(cart.filter((product) => product.id !== productToRemove.id));
      } else {
        // itemInCart.quantity--;
        setCart(cart.map((x) =>
        x.id === productToRemove.id ? {...itemInCart, quantity:itemInCart.quantity - 1} : x
         )
        )
      }
    };


  // const addToCart = (product) => {
  //   let newCart = [...cart];  
  //   let itemInCart = newCart.find((item) => product.id === item.id);
  // if  (itemInCart) {
  //     itemInCart.quantity++;
  //   } else {
  //     itemInCart = {
  //       ...product,
  //       quantity: 1,
  //     }
  //     newCart.push(itemInCart);
  //   }
  //   setCart(newCart);
  // };
    
   
      //  const addToCart = (product) => {
      //   let newCart = [...cart];  
      //   let itemInCart = newCart.find((item) => product.id === item.id);
      // if  (itemInCart) {
      //     itemInCart.quantity++;
      //   } else {
      //     itemInCart = {
      //       ...product,
      //       quantity: 1,
      //     }
      //     newCart.push(itemInCart);
      //   }
      //   setCart(newCart);
      // };
      



    const removeAll = () => {
      console.log("remove all")
      setCart([]);
    };
    
// const setQuantity = (product, amount) => {
//   const newCart = [...cart];
//   newCart.find(item => item === product.id).quantity = amount;
//   setCart(newCart); 
// }

    
    return (
        <>
        <h1>Cart</h1>
        {cart.length === 0 && (
          <h3>Your card is empty</h3>
        )}
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
           <h4 className = "product-price">${product.price}</h4> 
           <button onClick = {()=> addToCart(product)}>+</button>
           {/* {<input value={product.quantity} onChange={(e) => setQuantity(product, parseInt(e.target.value))}></input>}  */}
           <div className="product-quantity">
             {product.quantity}
           </div>
           <button onClick = {()=> decreaseAmountInCart(product)}>-</button>
           {/* <h4 className = "product-price">{product.quantity}</h4> */}
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