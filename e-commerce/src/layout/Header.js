import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAbout = location.pathname === "/about";

  return (
    <header>
      {isHomePage || isAbout ? null : (
        <div className=" bg-[#23856D] w-full font-['montserrat'] ">
          <div className="flex justify-evenly container mx-auto p-4 h-12 items-center text-white">
            <div className="flex items-center font-normal text-sm ">
              <img
                className="h-[1rem] w-[1rem] mr-1"
                src="./img/productlistphone.png"
                alt="Home"
              />
              <p>(225) 555-0118</p>
            </div>
            <div className="flex items-center font-normal text-sm ">
              <img
                className="h-[1rem] w-[1rem] mr-1"
                src="./img/productlistemail.png"
                alt="Home"
              />
              <p>michelle.rivera@example.com</p>
            </div>
            <div className="font-bold text-sm">
              <p>Follow Us and get a chance to win 80% off</p>
            </div>
            <div className="flex justify-between items-center font-bold text-sm gap-3">
              <h6>Follow Us :</h6>
              <img className="h-[1em] " src="./img/PLinsta.png" alt="" />
              <img className="h-[1em] " src="./img/PLyoutube.png" alt="" />
              <img className="h-[1em] " src="./img/PLfb.png" alt="" />
              <img className="h-[1em] " src="./img/PLtwitter.png" alt="" />
            </div>
          </div>
        </div>
      )}
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

              <NavLink to="/login">Login /</NavLink>

              <NavLink to="/register">Register</NavLink>
            </div>
            <div className="flex w-[9.875rem] justify-between px-3 items-center text-[#23A6F0]">
              <div className="flex items-center">
                <img
                  className="h-[1em] items-center"
                  src="./img/search.png"
                  alt=""
                />
              </div>
              <div className="flex items-center">
                <img
                  className="h-[1em] items-center"
                  src="./img/shop.png"
                  alt=""
                />
                <p className="ml-1">3</p>
              </div>
              <div className="flex items-center">
                <img
                  className="h-[1em] items-center"
                  src="./img/like.png"
                  alt=""
                />
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
