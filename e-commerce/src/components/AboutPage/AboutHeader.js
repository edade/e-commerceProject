
const AboutHeader = () => {
  const img = "./img/AboutPage/headerimg.png";
  return (
    <div className="flex flex-row items-center justify-center h-[500px] py-8">
      <div className="flex flex-col items-center text-center w-[356px] ">
        <div className="items-center w-[70%] justify-end text-left gap-6 ">
          <h5 className="text-[#252B42] text-sm py-8 font-bold">ABOUT COMPANY</h5>
          <h1 className="text-[#252B42] text-5xl font-bold">ABOUT US</h1>
          <p className="py-8">We know how large objects will act, but things on a small scale</p>
          <button className="text-white bg-[#23A6F0] py-4 px-8 rounded">
            Get Quote Now
          </button>
        </div>
      </div>
      <div className="relative z-0 m-auto">
        <div className="relative z-0 bg-[#FFE9EA] rounded-[100%] p-32 sm:p-52"></div>
        <div className="absolute top-0 bg-[#FFE9EA] rounded-[100%] p-6"></div>
        <div className="absolute bg-[#977DF4] rounded-[100%] p-2"></div>
        <div className="absolute right-0 top-0 bg-[#977DF4] rounded-[100%] p-2"></div>
        <img src={img} className="absolute top-[-49px] left-6"></img>
      </div>
    </div>
  );
};
export default AboutHeader;
