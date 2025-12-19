import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../redux/cartSlice";
import "./CartSidebar.css";

export default function CartSidebar({ isOpen, onClose }) {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (!isOpen) return null;

  return (
    <div className="cart-overlay">
      <div className="cart-sidebar">
        <h2>🛒 Mon Panier</h2>
        <button className="close-btn" onClick={onClose}>✖</button>

        {cart.length === 0 ? (
          <p>Panier vide</p>
        ) : (
          <>
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.images[0]} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.price} €</p>
                  <div className="qty">
                    <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
                  </div>
                </div>
                <button
                  className="remove"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  🗑
                </button>
              </div>
            ))}

            <h3>Total : {totalPrice} €</h3>
          </>
        )}
      </div>
    </div>
  );
}
