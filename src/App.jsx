import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import Navbar from "./components/Navbar";
import CartSidebar from "./components/CartSidebar";
import { useState } from "react";
import Wishlist from "./pages/Whishlist";



export default function App() {
  const [cartOpen, setCartOpen] = useState(false);

return (
<BrowserRouter>
<Navbar  onCartClick={() => setCartOpen(true)}/>
  <CartSidebar
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
  />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/catalogue" element={<Catalogue />} /> 
<Route path="/wishlist" element={<Wishlist />} /> 


</Routes>
</BrowserRouter>
);
}