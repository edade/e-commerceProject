import Brand from "../components/Brand";
import ProductListHeader from "../components/ProductListComp/ProductListHeader";
import ShopContainer from "../components/ProductListComp/ShopContainer";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import CategoryCard from "../components/ProductListComp/CategoryCard";
import ProductListFilter from "../components/ProductListComp/ProductListFilter";
import ProductCard from "../components/ProductListComp/ProductCard";

const ProductListPage = () => {
    return (
        <div>
            <ProductListHeader/>
            <Header/>
            <ShopContainer/>
            <CategoryCard/>
            <ProductListFilter/>
            <ProductCard/>
            <Brand/>
            <Footer/>
        </div>
    )
}

export default ProductListPage;