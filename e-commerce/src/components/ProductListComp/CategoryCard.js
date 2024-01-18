import { useSelector } from "react-redux";

const CategoryCard = ({ onCategoryChange }) => {
  const categories = useSelector((state) => state.global.categories);
  const sortedCategories = categories.sort((a, b) => b.rating - a.rating);
  const top5Categories = sortedCategories.slice(0, 5);
  return (
    <div className="flex lg:flex-wrap lg:flex-row sm:flex-col justify-center items-center gap-3 py-10 font-['montserrat'] bg-[#FAFAFA] ">
      {top5Categories.map((category, index) => (
        <a
          key={index}
          className="lg:w-60 sm:w-full sm:px-8"
          onClick={() => onCategoryChange(category)}
        >
          <div className="relative shadow-xl hover:text-[#737373]">
            <img
              src={category.img}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute top-20 left-10 text-white">
              <h6 className="text-2xl font-bold">{category.title}</h6>
              {/* <h2 className="text-xs font-semibold w-[94px] pt-1 h-[64px]">5 item</h2> */}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};
export default CategoryCard;
