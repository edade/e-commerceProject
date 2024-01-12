import Brand from "../components/Home/Brand";
import ShopContainer from "../components/ProductListComp/ShopContainer";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import CategoryCard from "../components/ProductListComp/CategoryCard";
import ProductListFilter from "../components/ProductListComp/ProductListFilter";
import ProductListCard from "../components/ProductListComp/ProductListCard";
import { useState } from "react";
import { fetchProducts } from "../store/thunk/fetchProducts";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ProductListPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [viewType, setViewType] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("price:asc");
  const [categoryType, setCategoryType] = useState(1);
  const loading = useSelector((state) => state.product.loading);

  const handleViewChange = (type) => {
    setViewType(type);
  };

  const handleFilterChange = (search) => {
    setSearchTerm(search);
    dispatch(fetchProducts(categoryType, search, sortType));
    setQueryString(search);
  };

  const handleSortChange = (sort) => {
    setSortType(sort);
    dispatch(fetchProducts(categoryType, searchTerm, sort));
    setQueryString(sort);
  };

  const handleCategoryChange = (category) => {
    setCategoryType(category.id);
    dispatch(fetchProducts(category.id, searchTerm, sortType));
    setQueryString(category, category.title);
  };

  const setQueryString = (category) => {
    if (category && category.code) {
      const genderPrefix = category.code.charAt(0) === "e" ? "erkek" : "kadin";
      let url = `${genderPrefix}/${category.title}&filter=${searchTerm}&sort=${sortType}`;
      history.push({ search: url });
    } else {
      console.error("Invalid category or category code.");
    }
  };

  return (
    <div>
      <Header />
      <ShopContainer />
      <CategoryCard onCategoryChange={handleCategoryChange} />
      <ProductListFilter
        onViewChange={handleViewChange}
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
        sortType={sortType}
        setViewType={setViewType}
        searchTerm={searchTerm}
        categoryType={categoryType}
        onCategoryChange={handleCategoryChange}
      />
      {loading ? (
        "loading..."
      ) : (
        <ProductListCard
          viewType={viewType}
          searchTerm={searchTerm}
          sortType={sortType}
          categoryType={categoryType}
        />
      )}
      <Brand />
      <Footer />
    </div>
  );
};

export default ProductListPage;
