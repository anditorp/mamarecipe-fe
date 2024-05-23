// components/navbar.js
import React from "react";

const Navbar = () => {
  return (
    <nav className="font-sans navbar bg-transparent shadow-none">
      <div className="navbar-start">
        <a className="navbar-item">Home</a>
        <a className="navbar-item">Add Recipe</a>
        <a className="navbar-item">Profile</a>
      </div>
      <div className="navbar-end">
        <a className="navbar-item">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
