const TeamHero = () => {
  return (
    <div className="flex flex-row gap-1">
        <div className="">
          <img src="./img/TeamPage/img1.png" className="h-full"></img>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-row overflow-hidden gap-1">
            <img src="./img/TeamPage/img2.png" className=" "></img>
            <img src="./img/TeamPage/img3.png" className=""></img>
          </div>
          <div className="flex flex-row overflow-hidden gap-1">
            <img src="./img/TeamPage/img4.png" className=""></img>
            <img src="./img/TeamPage/img5.png" className=""></img>
          </div>
        </div>
      </div>
  
  );
};
export default TeamHero;
