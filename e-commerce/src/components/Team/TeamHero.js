const TeamHero = () => {
  return (
    <div className="flex lg:flex-row sm:flex-col gap-1">
        <div className="lg:w-1/2 sm:w-full ">
          <img src="./img/TeamPage/img1.png" className="sm:w-full sm:px-8 lg:px-0 h-full"></img>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-row overflow-hidden gap-1 sm:px-8 lg:px-0">
            <img src="./img/TeamPage/img2.png" className="sm:w-1/2 "></img>
            <img src="./img/TeamPage/img3.png" className="sm:w-1/2 "></img>
          </div>
          <div className="flex flex-row overflow-hidden gap-1 sm:px-8 lg:px-0">
            <img src="./img/TeamPage/img4.png" className="sm:w-1/2 "></img>
            <img src="./img/TeamPage/img5.png" className="sm:w-1/2 "></img>
          </div>
        </div>
      </div>
  
  );
};
export default TeamHero;
