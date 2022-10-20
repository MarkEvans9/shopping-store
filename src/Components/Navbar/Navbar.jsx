import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";
const Navbar = () => {
  const cartCount = useSelector((state) => state.cartItems.length);
  return (
    <div className="navContainer">
      <Link to="/" className="logo">
        Shopping Store
      </Link>
      <div className="navlink">
        <NavLink end className="link" to="/">
          Home
        </NavLink>
        <NavLink className="link" to="/cart">
          Cart
        </NavLink>
        <h3>Cart items : {cartCount}</h3>
      </div>
    </div>
  );
};

export default Navbar;
