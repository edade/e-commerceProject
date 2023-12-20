import Brand from "../components/Home/Brand";
import ShopContainer from "../components/ProductListComp/ShopContainer";
import BestSellerProductCard from "../components/ProductPageComp/BestSellerProductCard";
import ProductCard from "../components/ProductPageComp/ProductCard";
import ProductDescription from "../components/ProductPageComp/ProductDescription";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
const ProductPage = () => {
  return (
    <div>
      <Header />
      <ShopContainer />
      <ProductCard />
      <ProductDescription /> 
      <BestSellerProductCard />
      <Brand />
      <Footer />
    </div>
  );
};

export default ProductPage;
