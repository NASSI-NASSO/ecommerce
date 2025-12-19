import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toggleWishlist } from "../redux/wishlistSlice";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
console.log('hhellooo === ' + product);

  return (
    <div className="card">
      {<img src={product.images[0]} alt={product.name} className="card-img" /> }
      <h3>{product.name}</h3>
      <p>{product.price} {product.currency}</p>
      <div className="card-actions">
        <button onClick={() => dispatch(addToCart(product))}>
          <FaShoppingCart /> Ajouter au panier
        </button>
        <button onClick={() => dispatch(toggleWishlist(product))}>
          <FaHeart /> Ajouter à la wishlist
        </button>
      </div>
    </div>
  );
}
