import Producstcard from "../components/Productscard";
import Shopcard from "../components/Shopcard";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

const Home =() => {
    return (
        <div>
            <Header/>
            <Shopcard/>
            <Producstcard/>
            <Footer/>
        </div>
    )
}
export default Home;