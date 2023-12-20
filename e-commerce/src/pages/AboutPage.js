import AboutHeader from "../components/AboutPage/AboutHeader";
import Stats from "../components/AboutPage/Stats";
import Team from "../components/AboutPage/Team";
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
            <Footer/>
        </div>
    )
}
export default AboutPage;