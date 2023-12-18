import Brand from "../components/Brand";
import ShopContainer from "../components/ProductListComp/ShopContainer";
import ProductCard from "../components/ProductPageComp/ProductCard";
import ProductDescription from "../components/ProductPageComp/ProductDescription";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
const ProductPage = () => {
    return (
        <div>
        
            <Header/>
            <ShopContainer/>
            <ProductDescription/>
            <ProductCard/>
            <Brand/>
            <Footer/>
        </div>
    )
}

export default ProductPage;