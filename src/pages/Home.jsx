import React from "react";
import  products from "../Data/Products";
import ProductCard from "../components/ProductCard";
import "./Home.css"
import Hero from "../components/hero";

export default function Home() {
  return (
    <div >
      <Hero/>
      
      <div className="product-grid">
            
        {products.slice(0, 6).map(product => (
            <ProductCard key={product.id} product={product} />
            ))} 
      </div>
        
    </div>
  );
}
