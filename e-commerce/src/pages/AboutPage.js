import AboutHeader from "../components/AboutPage/AboutHeader";
import Clients from "../components/AboutPage/Clients";
import Stats from "../components/AboutPage/Stats";
import Team from "../components/AboutPage/Team";
import Testimonials from "../components/AboutPage/Testimonials";
import Video from "../components/AboutPage/Video";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

const AboutPage =() => {
    return (
        <div>
            <Header/>
            <AboutHeader/>
            <Stats/>
            <Video/>
            <Team/>
            <Clients/>
            <Testimonials/>
            <Footer/>
        </div>
    )
}
export default AboutPage;