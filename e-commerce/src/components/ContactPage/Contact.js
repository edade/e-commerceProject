import { Button } from "@material-tailwind/react";

const Contact = () => {
  return (
    <div className="font-['Montserrat'] text-[#252B42] ">
      <div className="flex flex-col items-center gap-4">
        <p className="text-center text-sm font-bold">VISIT OUR OFFICE</p>
        <h3 className="text-center text-3xl font-bold max-w-xl">
          We help small businesses with big ideas
        </h3>
      </div>
      <div className="flex lg:flex-row sm:flex-col justify-center py-20   ">
        <div className=" flex flex-col items-center gap-2 p-14 ">
          <i className="bx bx-phone text-7xl text-[#23A6F0] "></i>
          <p className="text-center text-sm font-bold">
            georgia.young@example.com
          </p>
          <p className="text-center  text-sm font-bold ">
            georgia.young@ple.com
          </p>
          <p className="text-center text-sm font-bold pt-5 pb-2">Get Support</p>
          <button className="text-center text-sm font-bold text-[#23A6F0] py-4 px-5 rounded-[37px] border border-[#23A6F0]">
            Submit Request
          </button>
        </div>

        <div className=" flex flex-col items-center gap-2 p-14 bg-[#252B42] ">
          <i className="bx bxs-map text-7xl text-[#23A6F0]"></i>

          <p className="text-center text-white text-sm font-bold">
            georgia.young@example.com
          </p>
          <p className="text-center text-white text-sm font-bold ">
            georgia.young@ple.com
          </p>
          <p className="text-center text-white text-sm font-bold  pt-5 pb-2">
            Get Support
          </p>
          <button className="text-center text-sm text-[#23A6F0] font-bold py-4 px-5 rounded-[37px] border border-[#23A6F0]">
            Submit Request
          </button>
        </div>

        <div className=" flex flex-col items-center gap-2 p-14">
          <i className="bx bxs-envelope text-7xl text-[#23A6F0]"></i>
          <p className="text-center text-sm font-bold ">
            georgia.young@example.com
          </p>
          <p className="text-center text-sm font-bold ">
            georgia.young@ple.com
          </p>
          <p className="text-center text-sm font-bold  pt-5 pb-2">
            Get Support
          </p>
          <button className="text-center text-sm text-[#23A6F0] font-bold py-4 px-5 rounded-[37px] border border-[#23A6F0] ">
            Submit Request
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-6 pb-20">
      <img src="./img/ContactPage/arrow.png" className=" "></img>
        <p className="text-center text-sm font-bold">
          WE Can't WAIT TO MEET YOU
        </p>
        <div className="text-[#252B42]  text-5xl font-bold">Let's Talk</div>
        <div className="">
          <button className=" text-sm py-4 w-48 text-center text-white bg-[#2A7CC7] border rounded-md">
            Try it Free Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default Contact;
