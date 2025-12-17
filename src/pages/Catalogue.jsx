import React from 'react'
import products from '../Data/Products'
import "./Catalogue.css"
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function Catalogue() {
  const dispatch = useDispatch();
  return (
<div className='grid'>
{ products.map((product)=>(
 <div className='card'>
    <img src={product.image}  alt={product.name}/>
    <h3>{product.name}</h3>
    <p> prix {product.price}</p>
    <div className="actions">
        <span>❤️ 🛒</span>
        <span onClick={() => dispatch(addToCart(product))}>🛒</span>
    </div>
</div>

))}
      
    </div>
  )
}
