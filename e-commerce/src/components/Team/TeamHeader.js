import { NavLink } from "react-router-dom";
const TeamHeader = () => {
  return (
    <div className="py-14 font-['montserrat']">
      <div className="flex flex-col gap-4 items-center text-center">
        <h5 className="font-bold text-base text-[#737373]">WHAT WE DO</h5>
        <h5 className="px-12 py-4 font-bold text-5xl text-[#252B42]">
          Innovation tailored for you
        </h5>
        <div className="flex gap-4 justify-center">
          <NavLink to="/" className=" text-[#252B42] font-bold" exact>
            Home
          </NavLink>
          <i className="bx bxs-chevron-right text-[#BDBDBD] text-xl "></i>
          <p className=" font-bold text-[#737373]">Team</p>
        </div>
      </div>
    </div>
  );
};

export default TeamHeader;
