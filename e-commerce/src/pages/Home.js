import Bestseller from "../components/Home/Bestseller";
import Brand from "../components/Home/Brand";
import ImageCarousel from "../components/Home/CarouselImg";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import Mostpopular from "../components/Home/Mostpopular";
import Mostpopular2 from "../components/Home/Mostpopular2";
import Producstcard from "../components/Home/Productscard";
import Producstcard2 from "../components/Home/Productscard2";
import Shopcard from "../components/Home/Shopcard";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

const Home =() => {
    return (
        <div>
            <Header/>
            <ImageCarousel/>
            <Shopcard/>
            <Producstcard/> 
            <Mostpopular/>
            <Producstcard2/>
            <Mostpopular2/>
            <Bestseller/>
            <Brand/>
            <FeaturedPosts/>
            <Footer/>
        </div>
    )
}
export default Home;