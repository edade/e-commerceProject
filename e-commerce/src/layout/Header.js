import React, { useState } from "react";
import { NavLink, Link, useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { renewAxiosInstance } from "../api/api";
const Header = () => {
  const location = useLocation();
  const history = useHistory();

  const isProductPage = location.pathname === "/pages";
  const isProductListPage = location.pathname === "/products";
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch({ type: "USER_LOGOUT" });
    renewAxiosInstance();
  };

  const categories = useSelector((state) => state.global.categories);

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedGender, setSelectedGender] = useState(null);

  const handleDropdownVisibility = (visible) => {
    setDropdownVisible(visible);
  };
  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  const handleCategoryClick = (category) => {
    history.push(
      `/shopping/${category.code.charAt(0) === "e" ? "erkek" : "kadin"}/${
        category.title
      }/`
    );
    setDropdownVisible(false);
    setSelectedGender(null);
  };

  const womenCategories = categories.filter((category) =>
    category.code.startsWith("k:")
  );
  const menCategories = categories.filter((category) =>
    category.code.startsWith("e:")
  );

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
            <div
              className="relative cursor-pointer flex"
              onMouseEnter={() => handleDropdownVisibility(true)}
            >
              <NavLink to="/products">Shop</NavLink>

              {isDropdownVisible && (
                <div className="flex z-50  absolute top-full left-0 mt-2 bg-white border border-gray-300 shadow-md rounded-md">
                  <div className="relative cursor-pointer">
                    <div
                      onMouseEnter={() => handleGenderSelect("women")}
                      className={`cursor-pointer py-2 px-4 hover:bg-gray-100 ${
                        selectedGender === "women" && "bg-gray-100"
                      }`}
                    >
                      Women
                      {selectedGender === "women" && (
                        <div
                          onMouseLeave={handleMouseLeave}
                          className="absolute top-full left-0 mt-2 bg-white border border-gray-300 shadow-md rounded-md"
                        >
                          <ul>
                            {womenCategories.map((category) => (
                              <li
                                key={category.id}
                                onClick={() => handleCategoryClick(category)}
                                className="cursor-pointer py-2 px-4 hover:bg-gray-100"
                              >
                                {category.title}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="relative cursor-pointer">
                    <div
                      onMouseEnter={() => handleGenderSelect("men")}
                      className={`cursor-pointer py-2 px-4 hover:bg-gray-100 ${
                        selectedGender === "men" && "bg-gray-100"
                      }`}
                    >
                      Men
                      {selectedGender === "men" && (
                        <div
                          onMouseLeave={handleMouseLeave}
                          className="absolute top-full left-0 mt-2 bg-white border border-gray-300 shadow-md rounded-md"
                        >
                          <ul>
                            {menCategories.map((category) => (
                              <li
                                key={category.id}
                                onClick={() => handleCategoryClick(category)}
                                className="cursor-pointer py-2 px-4 hover:bg-gray-100"
                              >
                                {category.title}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Team</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/pages">Pages</NavLink>
          </nav>
          <div className="flex lg:flex-row sm:flex-col">
            {user.token ? (
              <div className="flex items-center w-auto justify-around px-4 font-semibold lg:pb-0 sm:pb-4 text-[#23A6F0]">
                <p>Welcome {user.name} </p>
                {user.gravatar && (
                  <img
                    className="h-[2em] rounded-full ml-2"
                    src={user.gravatar}
                    alt={`${user.name}'s Gravatar`}
                  />
                )}
                <button onClick={handleLogout} className="px-2">
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center w-[12.5rem] justify-around px-4 font-semibold lg:pb-0 sm:pb-4 text-[#23A6F0]">
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
