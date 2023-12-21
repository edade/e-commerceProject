const ContactHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center font-['montserrat'] pb-36">
      <div className="flex flex-row items-center justify-center h-[500px] gap-28 py-8 ">
        <div className="flex flex-col w-[356px] ">
          <div className="w-[70%] text-left">
            <h5 className="text-[#252B42] text-sm font-bold">
              CONTACT US
            </h5>
            <h1 className="text-[#252B42] text-4xl font-bold py-6">Get in touch today!</h1>
            <p className=" text-[#737373]">
              We know how large objects will act, but things on a small scale
            </p>
            <p className="text-[#252B42] text-lg font-bold py-4">
              Phone ; +451 215 215{" "}
            </p>
            <p className="text-[#252B42] text-lg font-bold pb-3">
              Fax : +451 215 215
            </p>
            <div className="flex flex-row gap-6 text-[#252B42]">
              <a href="">
                <i className="bx bxl-twitter text-4xl "></i>
              </a>
              <a href="">
                <i className="bx bxl-facebook-square text-4xl  "></i>
              </a>
              <a href="">
                <i className="bx bxl-instagram text-4xl "></i>
              </a>
              <a href="">
                <i className="bx bxl-linkedin text-4xl "></i>
              </a>
            </div>
          </div>
        </div>
        <div className="relative z-0">
          <div className="relative z-0 bg-[#FFE9EA] rounded-[100%] p-32 sm:p-52"></div>
          <div className="absolute top-0 bg-[#FFE9EA] rounded-[100%] p-6"></div>
          <div className="absolute bg-[#977DF4] rounded-[100%] p-2"></div>
          <div className="absolute right-0 top-0 bg-[#977DF4] rounded-[100%] p-2"></div>
          <img
            src="./img/ContactPage/img1.png"
            className="absolute top-[-49px] left-6"
          ></img>
        </div>
      </div>
    </div>
  );
};
export default ContactHeader;
