import React from "react";
import { IncreaseItem, DecreaseItem, RemoveFromCart } from "../utils";

const ShowCart = ({ cart, refreshCart }) => {
  const totalPrice = cart.reduce((acc, i) => acc + i.quantity * i.price, 0);

  const updateCart = (type, item) => {
    let finalCart;
    if (type === 1) {
      finalCart = IncreaseItem(cart, item);
    } else {
      if (item.quantity === 1) {
        finalCart = RemoveFromCart(cart, item);
      } else {
        finalCart = DecreaseItem(cart, item);
      }
    }
    refreshCart(finalCart);
  };

  const RemoveCart = (p) => {
    let newcart = cart.filter((item) => item.id !== p.id);
    refreshCart(newcart);
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>

      {cart.length === 0 && <p>Your cart is empty.</p>}

      {cart.map((c) => (
        <div className="cart-item" key={c.id}>
          <div className="cart-item-info">
            <img src={c.image} alt={c.product} className="cart-item-image" />
            <div>
              <h3>{c.product}</h3>
              <p>${c.price} each</p>
            </div>
          </div>

          <div className="cart-item-actions">
            <button onClick={() => updateCart(0, c)} className="quantity-btn">
              -
            </button>
            <span className="quantity">{c.quantity}</span>
            <button onClick={() => updateCart(1, c)} className="quantity-btn">
              +
            </button>
            <button onClick={() => RemoveCart(c)} className="remove-btn">
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="cart-total">
        <h2>Total: ${totalPrice}</h2>
      </div>
    </div>
  );
};

export default ShowCart;
