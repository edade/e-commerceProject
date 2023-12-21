import { NavLink, Link } from "react-router-dom";
const featuredData = [
  "./img/featured1.png",
  "./img/featured2.png",
  "./img/featured3.png",
];

const FeaturedPosts = () => {
  return (
    <div className="pb-16 font-['Montserrat']">
      <div className="mx-auto">
        <div className="text-center py-16">
          <h6 className="text-primary-color font-bold text-sm text-[#23A6F0]">
            Practice Advice
          </h6>
          <h3 className="font-bold text-[40px] text-[#252B42]">
            Featured Posts
          </h3>
        </div>
        <div className=" flex lg:flex-row sm:flex-col lg:items center lg:justify-center sm:items-center sm:justify-center ">
          {featuredData.map((image, index) => (
            <div key={index} className="relative shadow-md w-[320px] mx-2 ">
              <img
                className="w-[348px] h-[300px]"
                src={image}
                alt={`Featured Post ${index + 1}`}
              />
              <p className="absolute top-5 left-5 font-bold text-sm px-[10px] text-[#FFFFFF] bg-[#E74040] shadow-sm">
                NEW
              </p>
              <div className="pt-[25px] pr-[15px] pb-[35px] pl-[15px] flex flex-col gap-4 w-[300px] m-auto">
                <div className="flex gap-4">
                  <p className="text-[#8EC2F2] font-normal text-xs">Google</p>
                  <p className="font-normal text-[#737373]  text-xs">
                    Trending
                  </p>
                  <p className="text-[#737373] font-normal text-xs">New</p>
                </div>
                <h4 className="font-semibold text-xl text-left text-[#252B42]">
                  Loudest à la Madison #1 (L'integral)
                </h4>
                <p className="font-normal text-xs text-[#737373]">
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>
                <div className="flex justify-between items center text-[#737373]">
                  <div className="font-normal text-xs flex ">
                    <img
                      className="h-[1em] mx-1 "
                      src="./img/alarm.png"
                      alt=""
                    />
                    22 April 2021
                  </div>
                  <div className=" flex font-normal text-xs">
                    <img
                      className="h-[1em] mx-1 "
                      src="./img/chart.png"
                      alt=""
                    />
                    10 comments
                  </div>
                </div>
                <NavLink
                  to="/feature-posts/"
                  className="flex font-bold text-sm text-[#737373] items-center"
                >
                  Learn More 
                  <span>
                    <img className="h-[1em] mx-2 " src="./img/arrow.png" alt="" />
                  </span>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FeaturedPosts;
