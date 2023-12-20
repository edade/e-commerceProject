const AboutHeader = () => {
  const img = "./img/AboutPage/headerimg.png";
  return (
    <div className="flex flex-col items-center justify-center font-['montserrat']">
      <div className="flex flex-row items-center justify-center h-[500px] gap-28 py-8 ">
        <div className="flex flex-col w-[356px] ">
          <div className="w-[70%] text-left gap-6 ">
            <h5 className="text-[#252B42] text-sm py-8 font-bold">
              ABOUT COMPANY
            </h5>
            <h1 className="text-[#252B42] text-4xl font-bold">ABOUT US</h1>
            <p className="py-8 text-[#737373]">
              We know how large objects will act, but things on a small scale
            </p>
            <button className="text-white bg-[#23A6F0] py-4 px-8 rounded">
              Get Quote Now
            </button>
          </div>
        </div>
        <div className="relative z-0">
          <div className="relative z-0 bg-[#FFE9EA] rounded-[100%] p-32 sm:p-52"></div>
          <div className="absolute top-0 bg-[#FFE9EA] rounded-[100%] p-6"></div>
          <div className="absolute bg-[#977DF4] rounded-[100%] p-2"></div>
          <div className="absolute right-0 top-0 bg-[#977DF4] rounded-[100%] p-2"></div>
          <img src={img} className="absolute top-[-49px] left-6"></img>
        </div>
      </div>
      <div className=" py-8 flex flex-row gap-10 justify-between">
        <div className=" flex flex-col gap-6">
          <h5 className=" text-base font-semibold text-left text-[#E74040]">
            problems trying
          </h5>
          <p className="text-xl text-left tracking-wider font-semibold">
            Met minim Mollie non desert <br/>Alamo est sit cliquey dolor <br/>do met sent.
          </p>
        </div>
        <div className="flex text-[#737373] text-left items-center font-semibold">
          <p className="text-sm ">
            Problems trying to resolve the conflict between the two major realms
            of <br /> Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutHeader;
