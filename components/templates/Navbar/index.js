// components/Navbar.js
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-none ">
      <div className="navbar-start ml-[132px] max-lg:ml-0 z-20">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/add-recipe">Add Recipe</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          </ul>
        </div>
        <Link
          href="/"
          className="btn btn-ghost text-xl lg:flex hidden text-secondary"
        >
          Home
        </Link>
        <Link
          href="/add-recipe"
          className="btn btn-ghost text-xl lg:flex hidden text-secondary"
        >
          Add Recipe
        </Link>
        <Link
          href="/profile"
          className="btn btn-ghost text-xl lg:flex hidden text-secondary"
        >
          Profile
        </Link>
      </div>
      <div className="navbar-end mr-[132px] max-lg:mr-0">
        <Link
          href="/login"
          className="btn btn-ghost text-xl lg:flex  text-secondary"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
