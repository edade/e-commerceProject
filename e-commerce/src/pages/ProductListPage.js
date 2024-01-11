import Brand from "../components/Home/Brand";
import ShopContainer from "../components/ProductListComp/ShopContainer";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import CategoryCard from "../components/ProductListComp/CategoryCard";
import ProductListFilter from "../components/ProductListComp/ProductListFilter";
import ProductListCard from "../components/ProductListComp/ProductListCard";
import { useState } from "react";

const ProductListPage = () => {
  const [viewType, setViewType] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("");

  const handleViewChange = (type) => {
    setViewType(type);
  };

  const handleFilterChange = (search) => {
    setSearchTerm(search);
  };

  const handleSortChange = (sort) => {
    setSortType(sort);
  };

  return (
    <div>
      <Header />
      <ShopContainer />
      <CategoryCard />
      <ProductListFilter
        onViewChange={handleViewChange}
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
        sortType={sortType}
        setViewType={setViewType}
        searchTerm={searchTerm}
      />
      <ProductListCard
        viewType={viewType}
        searchTerm={searchTerm}
        sortType={sortType}
      />
      <Brand />
      <Footer />
    </div>
  );
};

export default ProductListPage;
