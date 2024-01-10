import { Carousel } from "@material-tailwind/react";
import { useState } from "react";

const ProductCard = (data) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [image, setImage] = useState(0);
  const images = [
    "./img/ProductPage/image10.png",
    "./img/ProductPage/image11.png",
  ];
  const ImageHandler = (index) => {
    setActiveIndex(index);
    setImage(images[index]);
  };

  const product = data.product;

  return (
    <div className="bg-[#FAFAFA] py-3">
      <div className="flex lg:flex-row sm:flex-col justify-center font-['montserrat'] gap-3 text-sm text-[#737373] font-bold ">
        <div className="flex-1 lg:ml-28 sm:mx-8 sm:flex-col lg:h-[480px]">
          <Carousel
            className=""
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 ">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block w-5 h-2 cursor-pointer transition-all ${
                      activeIndex === i ? "bg-white" : "bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            {product?.images.map((image, index) => (
              <div key={index} data-src={image} className="item relative ">
                <img
                  src={image.url}
                  alt={`image ${index + 1}`}
                  onClick={ImageHandler}
                  className={`w-full lg:h-45 object-contain ${
                    activeIndex === index ? "filter-none" : "filter-grayscale"
                  }`}
                />
              </div>
            ))}
          </Carousel>
          <div className="flex flex-row lg:ml-0 sm:mx-0 sm:items-start py-2 gap-3">
            {product?.images.map((img, i) => (
              <img
                src={img.url}
                className="opacity-50 w-24 h-[75px]"
                onClick={ImageHandler}
              ></img>
            ))}
          </div>
        </div>

        <div className=" flex flex-1 flex-col text-start gap-5 mx-20">
          <h4 className="text-xl font-bold text-[#252B42]">{product?.name}</h4>
          <div className="flex flex-row items-center gap-2">
            <i className="bx bxs-star text-[#F3CD03] "></i>
            <i className="bx bxs-star text-[#F3CD03] "></i>
            <i className="bx bxs-star text-[#F3CD03] "></i>
            <i className="bx bxs-star text-[#F3CD03] "></i>
            <i className="bx bxs-star text-[#F3CD03] "></i>
            <p> 10 reviews</p>
          </div>
          <h5 className="text-2xl font-bold text-[#252B42] ">
            {product?.price}
          </h5>
          <div className="flex flex-row gap-2">
            <h6>Availability :</h6>
            <h6 className="text-[#23A6F0]">
              {product?.stock > 0 ? "In Stock" : "Out of Stock"}
            </h6>
          </div>
          <p className=" font-semibold w-[70%] ">{product?.description}</p>
          <hr className="mr-28 font-bold"></hr>
          <div className="flex flex-row gap-2">
            <button class="w-5 h-5 bg-[#23A6F0] rounded-full "></button>
            <button class="w-5 h-5 bg-[#23856D] rounded-full "></button>
            <button class="w-5 h-5 bg-[#E77C40] rounded-full "></button>
            <button class="w-5 h-5 bg-[#23856D] rounded-full "></button>
          </div>
          <div className="flex gap-4 py-7">
            <button className="text-white bg-[#23A6F0] py-3 px-4 rounded">
              Add to Basket
            </button>
            <div className=" flex items-center text-3xl text-[#252B42] gap-3">
              <i className="bx bx-heart border border-1 rounded-full "></i>
              <i className="bx bx-cart-alt border border-1 rounded-full "></i>
              <i className="bx bx-show border border-1 rounded-full "></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
