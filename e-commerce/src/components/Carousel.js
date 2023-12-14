import { useState } from "react";

export default function Carousel({ slides }) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative w-full font-['montserrat']">
      <div
        className={`flex transition ease-out duration-500`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s) => {
          return <img src={s} />;
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <img className="h-[1em] " src="./img/left.png" alt="" />
        </button>
        <div className="flex flex-col items-center text-center">
          <h1 className=" text-[40px] text-white text-center font-bold">GROCERIES DELIVERY</h1>
          <p className="w-[20rem] m-auto font-normal text-center text-white text-xl py-4">
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </p>
          <button className="text-white bg-[#23A6F0] w-[175px] text-center py-2 rounded"> Start Now</button>
        </div>
        <button onClick={nextSlide}>
          <img className="h-[1em] " src="./img/right.png" alt="" />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={` w-20 h-1 cursor-pointer  ${
                i == current ? "bg-gray-500" : "bg-white"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
