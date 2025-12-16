import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
        <nav className='navbar' >
      <h3>FLACH METAL</h3>
      <div className='links'>
      <Link to="/">Home</Link>
      <Link to="/catalogue">Catalogue</Link>
      <Link to="/wishlist">Wishlist</Link>
      </div>
    </nav>
      
    </div>
  )
}
