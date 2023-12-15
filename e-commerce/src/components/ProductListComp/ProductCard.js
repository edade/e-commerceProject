const ProductCard = () => {
  const ProductData = [
    { image: "./img/productcard/img1.png" },
    { image: "./img/productcard/img2.png" },
    { image: "./img/productcard/img3.png" },
    { image: "./img/productcard/img4.png" },
    { image: "./img/productcard/img5.png" },
    { image: "./img/productcard/img6.png" },
    { image: "./img/productcard/img7.png" },
    { image: "./img/productcard/img8.png" },
    { image: "./img/productcard/img9.png" },
    { image: "./img/productcard/img10.png" },
    { image: "./img/productcard/img11.png" },
    { image: "./img/productcard/img12.png" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-20 my-8  font-['montserrat']">
      {ProductData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col  text-center w-[15rem] mb-8 shadow-lg hover:shadow-slate-800 "
        >
          <img className="w-[15rem] h-[15rem]" src={item.image} alt="" />
          <h5 className="text-[#252B42]  font-bold">Graphic Design</h5>
          <a className="text-[#737373] text-sm font-bold py-2" href="#">
            English Department
          </a>
          <h5 className="text-[#BDBDBD] font-bold">
            $16.48 <span className="text-[#23856D] font-bold ">$6.48</span>
          </h5>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
