import { Button } from "@material-tailwind/react";
const Testimonials = () => {
  return (
  
      <div className="w-full flex justify-center font-['montserrat']">
        <div className="flex w-full">
          <div className="w-full flex justify-center items-center bg-[#2A7CC7]">
            <div className="w-3/4 gap-8 py-24 flex flex-col items-start  text-white">
              <h2 className="font-semibold text-lg ">WORK WITH US</h2>
              <h3 className="font-bold tracking-wider text-4xl">
                Now Let’s grow Yours
              </h3>
              <p className="text-left text-normal">
                The gradual accumulation of information about atomic and
                small-scale behavior during the first quarter of the 20th
              </p>
              <Button className="tracking-wider text-sm py-4 w-1/4 text-center bg-[#2A7CC7] border border-white">
                Button
              </Button>
            </div>
          </div>
          <div className="w-2/3">
            <img className="w-full " src="./img/AboutPage/woman.png" />
          </div>
        </div>
      </div>
   
  );
};

export default Testimonials;
