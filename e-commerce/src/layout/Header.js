import React from "react";
import { NavLink, Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="flex justify-between mt-2 items-center h-[4rem] font-['montserrat']">
        <Link
          to="/"
          className="flex ml-[8.5rem] w-44 h-14 items-center font-bold"
        >
          Bandage
        </Link>
        <div className="flex w-[68.25rem] mr-[8.5rem] justify-around h-14 items-center">
          <nav className="flex w-[22.5rem] justify-between font-semibold text-[#737373]">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Shop</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/pages">Pages</NavLink>
          </nav>
          <div className="flex">
            <div className="flex items-center w-[12.5rem] justify-around px-4 font-semibold text-[#23A6F0]">
            <img className="h-[1em] " src="./img/login.png" alt="" />
            
              <NavLink  to="/login">Login /</NavLink>

              <NavLink to="/register">Register</NavLink>
            </div>
            <div className="flex w-[9.875rem] justify-between px-3 items-center text-[#23A6F0]">
                <div className="flex items-center">
                <img className="h-[1em] items-center" src="./img/search.png" alt="" />
                </div>
              <div className="flex items-center">
              <img className="h-[1em] items-center" src="./img/shop.png" alt="" />
                <p className="ml-1">3</p>
              </div>
              <div className="flex items-center">
              <img className="h-[1em] items-center" src="./img/like.png" alt="" />
                <p className="ml-1">10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
