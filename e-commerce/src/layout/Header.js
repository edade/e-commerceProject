import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const Header = () => {
  const location = useLocation();

  const isProductPage = location.pathname === "/pages";
  const isProductListPage = location.pathname === "/products";
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  return (
    <header>
      {isProductPage || isProductListPage ? (
        <div className=" bg-[#23856D] w-full font-['montserrat'] hidden md:block ">
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
      ) : null}
      <div className="flex lg:flex-row sm:flex-col sm: justify-between mt-2 items-center font-['montserrat']">
        <Link
          to="/"
          className="flex lg:ml-[8.5rem] lg:w-44 lg:h-14 sm:h-4 items-center font-bold"
        >
          Bandage
        </Link>
        <div className="flex lg:flex-row sm:flex-col  lg:w-[68.25rem] lg:mr-[8.5rem] lg:justify-around h-26 items-center">
          <nav className="flex lg:flex-row sm:flex-col sm:py-6 sm:justify-center lg:w-[22.5rem] lg:justify-between font-semibold text-[#737373]">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Shop</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Team</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/pages">Pages</NavLink>
          </nav>
          <div className="flex lg:flex-row sm:flex-col">
            {user.email ? (
              <div className="flex items-center w-auto justify-around px-4 font-semibold lg:pb-0 sm:pb-4 text-[#23A6F0]">
                <p>Welcome {user.name} </p>

                <Link to="/" className="px-2">Logout</Link>
              </div>
            ) : (
              <div className="flex items-center w-[12.5rem] justify-around px-4 font-semibold sm:pb-4 text-[#23A6F0]">
                <img className="h-[1em] " src="./img/login.png" alt="" />

                <NavLink to="/login">Login /</NavLink>

                <NavLink to="/signup">Register</NavLink>
              </div>
            )}
            <div className="flex lg:flex-row sm:flex-col lg:w-[9.875rem] lg:justify-between px-3 items-center text-[#23A6F0]">
              <div className="flex items-center ">
                <img
                  className="h-[1em] items-center"
                  src="./img/search.png"
                  alt=""
                />
              </div>
              <div className="flex items-center sm:py-4">
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
