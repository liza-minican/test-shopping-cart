import React from "react";

export const Cart = ({ cart, setCart, addToCart }) => {
  const getSum = () => {
    return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  };
  const removeFromCart = (productToRemove) => {
    console.log("remove to cart");
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const decreaseAmountInCart = (productToRemove) => {
    console.log("remove to cart");
    let itemInCart = cart.find((product) => product.id === productToRemove.id);
    if (itemInCart.quantity === 1) {
      setCart(cart.filter((product) => product.id !== productToRemove.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id === productToRemove.id
            ? { ...itemInCart, quantity: itemInCart.quantity - 1 }
            : x
        )
      );
    }
  };

  const removeAll = () => {
    setCart([]);
  };

  const checkoutAlert = () => {
alert("Thank you and go to payment!")
  }

  return (
    <>
      <h1 className="header-page-title position-center highlight">Cart</h1>
      {cart.length === 0 && <h3 className="position-center">Your card is empty</h3>}
      <div className="product-list">
        {cart.map((product) => (
          <div className="product-card" key={product.id}>
            <h3 className="highlight">{product.name}</h3>
            <p>{product.h2}</p>
            <div className="flex-wrap align">
              <h4>${product.price}</h4>
              <button className="button-change-quantity" onClick={() => addToCart(product)}>+</button>
              <div className="product-quantity">{product.quantity}</div>
              <button className="button-change-quantity"  onClick={() => decreaseAmountInCart(product)}>-</button>
              <button
                className="primary-button"
                onClick={() => removeFromCart(product)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="position-center">
      <div className="margin-30 bold">Total Cost: ${getSum()} </div>
      {cart.length > 0 && (
        <div className="margin-30">
           <button className="primary-button" onClick={() => removeAll()}>Empty cart</button>
        </div>
      )}
      <div>
      <button className="button-inside-cart"
        onClick={checkoutAlert}
      >
        Checkout
      </button>
      </div> 
      </div>
    </>
  );
};
