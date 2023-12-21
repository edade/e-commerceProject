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
        <div className="flex lg:flex-wrap lg:flex-row sm:flex-col justify-center items-center gap-9 lg:my-12 sm:my-0 lg:py-16 sm:py-20 bg-[#FAFAFA] ">
          {logoList.map((image, index) => (
            <div key={index} className="w-40">
              <img src={image} alt="" className="w-full h-auto" />
            </div>
          ))}
        </div>
    )
    
}
export default Brand;