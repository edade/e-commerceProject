const ProductListHeader = () => {
  return (
    <div className=" bg-[#23856D] w-full font-['montserrat'] ">
      <div className="flex justify-evenly container mx-auto p-4 h-12 items-center text-white">
        <div className="flex items-center font-normal text-sm ">
          <img
            className="h-[1rem] w-[1rem] mr-1"
            src="./img/productlistphone.png"
            alt="Home"
          />
          <p>(225) 555-0118</p>
        </div>
        <div className="flex items-center font-normal text-sm ">
          <img
            className="h-[1rem] w-[1rem] mr-1"
            src="./img/productlistemail.png"
            alt="Home"
          />
          <p>michelle.rivera@example.com</p>
        </div>
        <div className="font-bold text-sm">
          <p>Follow Us and get a chance to win 80% off</p>
        </div>
        <div className="flex justify-between items-center font-bold text-sm gap-3">
          <h6>Follow Us :</h6>
          <img className="h-[1em] " src="./img/PLinsta.png" alt="" />
          <img className="h-[1em] " src="./img/PLyoutube.png" alt="" />
          <img className="h-[1em] " src="./img/PLfb.png" alt="" />
          <img className="h-[1em] " src="./img/PLtwitter.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductListHeader;
