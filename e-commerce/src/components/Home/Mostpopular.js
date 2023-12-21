import { NavLink, Link } from "react-router-dom";
const Mostpopular = () => {
  return (
    <div className="flex-col font-['montserrat']">
      <div className="flex lg:flex-row sm:flex-col container justify-center items-center py-4 gap-1 ]">
        <div className="flex lg:flex-row sm:flex-col  ">
          <div>
            <img className="ml-[3rem] w-[80%]" src="./img/mostpopular.png"></img>
          </div>
          <div className="flex flex-col items-center justify-center py-20 gap-[19px] text-center bg-[#FAFAFA]">
            <h5 className="text-[#252B42] font-bold text-2xl">MOST POPULAR</h5>
            <p className="font-semibold text-sm w-[15rem] text-[#737373] ">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>
            <img src="./img/mostpopular2.png"></img>
            <Link
              className="font-bold text-sm text-[#252B42]"
              exact
              to="/english-department"
            >
              English Department
            </Link>
            <div className="flex">
              <h5 className="font-bold text-base text-[#BDBDBD]">$16.48 <span className="text-[#23856D] font-bold ">$6.48</span></h5>
              
            </div>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-col lg:flex-row sm:items-center lg:items-center lg:ml-[10rem] text-left ">
          <div className="flex gap-4 p-4">
            <div className="text-[#E74040] font-bold text-[40px] me-2">1.</div>
            <div className="flex flex-col gap-[5px]">
              <p className="font-bold text-sm text-[#252B42]">Easy to use</p>
              <p className="font-medium text-xs text-[#737373] ">
                Things on a very small that you have any direct
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-4 ">
            <div className="text-[#E74040] font-bold text-[40px] me-2">2.</div>
            <div className="flex flex-col gap-[5px]">
              <p className="font-bold text-sm text-[#252B42]">Easy to use</p>
              <p className="font-medium text-xs text-[#737373] ">
                Things on a very small that you have any direct
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-4">
            <div className="text-[#E74040] font-bold text-[40px] me-2">3.</div>
            <div className="flex flex-col gap-[5px]">
              <p className="font-bold text-sm text-[#252B42]">Easy to use</p>
              <p className="font-medium text-xs text-[#737373] ">
                Things on a very small that you have any direct
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-4">
            <div className="text-[#E74040] font-bold text-[40px] me-2">4.</div>
            <div className="flex flex-col gap-[5px]">
              <p className="font-bold text-sm text-[#252B42] lg:mr-[10rem] ">Easy to use</p>
              <p className="font-medium text-xs text-[#737373]  lg:mr-[9rem]">
                Things on a very small that you have any direct
              </p>
            </div>
          </div>
        </div>
    </div>
  );
};
export default Mostpopular;
