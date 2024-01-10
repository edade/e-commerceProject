import { useSelector } from "react-redux";
import Brand from "../components/Home/Brand";
import ShopContainer from "../components/ProductListComp/ShopContainer";
import BestSellerProductCard from "../components/ProductPageComp/BestSellerProductCard";
import ProductCard from "../components/ProductPageComp/ProductCard";
import ProductDescription from "../components/ProductPageComp/ProductDescription";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { useRouteMatch } from "react-router-dom";
const ProductPage = () => {
  const products = useSelector((state) => state.product.productList);

  const { path, params } = useRouteMatch();

  const product = products.filter((product) => product.id == params.id)[0];
  return (
    <div>
      <Header />
      <ShopContainer />
      <ProductCard product={product} />
      <ProductDescription product={product} />
      <BestSellerProductCard products={products} />
      <Brand />
      <Footer />
    </div>
  );
};

export default ProductPage;
