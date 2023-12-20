const Brand =()=> {
    const logoList = [
        "./img/logo1.png",
        "./img/logo2.png",
        "./img/logo3.png",
        "./img/logo4.png",
        "./img/logo5.png",
        "./img/logo6.png",
      ];
    return (
        <div className="flex flex-wrap justify-center items-center gap-9 my-12 py-16 bg-[#FAFAFA] ">
          {logoList.map((image, index) => (
            <div key={index} className="w-40">
              <img src={image} alt="" className="w-full h-auto" />
            </div>
          ))}
        </div>
    )
    
}
export default Brand;