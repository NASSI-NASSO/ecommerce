import React from 'react'
import products from '../Data/Products'

export default function Catalogue() {
  return (
<div>
{ products.map((product)=>(
 <div>
    <img src={product.image}   alt={product.name}/>
    <h1>{product.name}</h1>
    <p> prix {product.price}</p>
</div>

))}
      
    </div>
  )
}
