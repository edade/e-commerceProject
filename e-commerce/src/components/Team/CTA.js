import { Button } from "@material-tailwind/react";
const CTA = () => {
  return (
    <div className=" flex flex-col font-['montserrat'] justify-center items-center py-20 ">
      <div className=" font-bold text-3xl text-[#252B42] py-6 ">
        Start your 14 days free trial
      </div>
      <p className="font-semibold text-sm text-[#737373] w-1/2">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        RELIT official consequent.
      </p>
      <div className="py-6">
        <Button className=" text-sm py-4 w-48 text-center bg-[#2A7CC7] border">
          Try it Free Now
        </Button>
      </div>
      <div className="flex flex-row gap-6">
         <a href="">
          <i className="bx bxl-twitter text-4xl text-[#55ACEE]"></i>
        </a>
        <a href="">
          <i className="bx bxl-facebook-square text-4xl text-[#395185] "></i>
        </a>
        <a href="">
          <i className="bx bxl-instagram text-4xl text-black"></i>
        </a>
        <a href="">
          <i className="bx bxl-linkedin text-4xl text-[#0A66C2]"></i>
        </a>
       
      </div>
    </div>
  );
};
export default CTA;
