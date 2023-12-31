const Clients = () => {
  const logoList = [
    "./img/logo1.png",
    "./img/logo2.png",
    "./img/logo3.png",
    "./img/logo4.png",
    "./img/logo5.png",
    "./img/logo6.png",
  ];
  return (
    <div className="bg-[#FAFAFA] gap-6 py-20 font-['montserrat']">
      <div className=" flex flex-col gap-6 text-center items-center">
        <p className="text-4xl font-bold text-[#252B42]">
          Big Companies Are Here
        </p>
        <p className="flex justify-center lg:mx-96 sm:px-40 lg:px-0 font-semibold text-md text-[#737373]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="flex lg:flex-wrap lg:flex-row sm:flex-col justify-center items-center gap-9 my-12 bg-[#FAFAFA] ">
        {logoList.map((image, index) => (
          <div key={index} className="w-40">
            <img src={image} alt="" className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
