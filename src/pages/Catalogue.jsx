import React from "react";
import ProductCard from "../components/ProductCard";
import  products from "../Data/Products";

export default function Catalogue() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Catalogue des fleurs</h1>

      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}


