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

  const handleViewChange = (type) => {
    setViewType(type);
  };

  const handleFilterChange = (event) => {
    console.log("Selected Filter:", event.target.value);
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
      />
      <ProductListCard viewType={viewType} />
      <Brand />
      <Footer />
    </div>
  );
};

export default ProductListPage;
