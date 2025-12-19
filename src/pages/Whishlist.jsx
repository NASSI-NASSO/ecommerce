import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../redux/wishlistSlice";
import { addToCart } from "../redux/cartSlice";
import "./Home.css"

export default function Wishlist() {
  const wishlist = useSelector(state => state.wishlist);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <h1>❤️ Ma Wishlist</h1>

      {wishlist.length === 0 ? (
        <p>Aucun produit dans la wishlist</p>
      ) : (
        <div className="product-grid">
          {wishlist.map(product => (
            <div key={product.id} className="card">
              <img src={product.images[0]} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price} €</p>
              
            <div className="card-actions">
              <button onClick={() => dispatch(addToCart(product))}>
                Ajouter au panier
              </button>

              <button onClick={() => dispatch(toggleWishlist(product))}>
                Supprimer
              </button>
            /</div>  
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
