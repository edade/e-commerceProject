import { NavLink } from "react-router-dom/cjs/react-router-dom";

const ShopContainer = () => {
  return (
    <div className="w-full font-['montserrat'] container mx-auto ">
    <div className="flex flex-row items-center pl-[5.7rem] pr-[5.7rem] justify-between space-between">
      <NavLink to="/products">
        <h3 className="font-bold text-2xl text-[#252B42]">Shop</h3>
      </NavLink>
      <div className="flex font-bold text-sm items-center space-x-1">
        <NavLink to="/" className="text-[#252B42]" exact>
          Home
        </NavLink>
        <img className="h-[1em] " src="./img/right2.png" alt="" />
        <NavLink to="/products" className="text-[#BDBDBD]" exact>
          Shop
        </NavLink>
      </div>
    </div>
  </div>
  );
};
export default ShopContainer;
