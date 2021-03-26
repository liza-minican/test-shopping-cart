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
      <h1>Cart</h1>
      {cart.length === 0 && <h3>Your card is empty</h3>}
      {cart.length > 0 && (
        <button onClick={() => removeAll()}>Clear cart</button>
      )}
      <div className="product-list">
        {cart.map((product) => (
          <div className="product-card" key={product.id}>
            <h3 className="product-title">{product.name}</h3>
            <p className="product-description">{product.h2}</p>
            <div className="flex-wrap-buy">
              <h4 className="product-price">${product.price}</h4>
              <button onClick={() => addToCart(product)}>+</button>
              <div className="product-quantity">{product.quantity}</div>
              <button onClick={() => decreaseAmountInCart(product)}>-</button>
              <button
                className="remove-button"
                onClick={() => removeFromCart(product)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>Total Cost: ${getSum()} </div>
      <div className="ckeckout">
      <button
        className="checkout-button"
        onClick={checkoutAlert}
      >
        Checkout
      </button>
      </div>
    
    </>
  );
};
