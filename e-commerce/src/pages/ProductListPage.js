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

  const handleViewChange = (type) => {
    setViewType(type);
  };

  const handleFilterChange = (search) => {
    setSearchTerm(search);
  };

  return (
    <div>
      <Header />
      <ShopContainer />
      <CategoryCard />
      <ProductListFilter
        onViewChange={handleViewChange}
        onFilterChange={handleFilterChange}
        setViewType={setViewType}
        searchTerm={searchTerm}
      />
      <ProductListCard viewType={viewType} searchTerm={searchTerm} />
      <Brand />
      <Footer />
    </div>
  );
};

export default ProductListPage;
