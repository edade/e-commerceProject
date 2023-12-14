import Bestseller from "../components/Bestseller";
import ImageCarousel from "../components/CarouselImg";
import FeaturedPosts from "../components/FeaturedPosts";
import Mostpopular from "../components/Mostpopular";
import Mostpopular2 from "../components/Mostpopular2";
import Producstcard from "../components/Productscard";
import Producstcard2 from "../components/Productscard2";
import Shopcard from "../components/Shopcard";
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
            <FeaturedPosts/>
            <Footer/>
        </div>
    )
}
export default Home;