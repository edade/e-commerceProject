import CTA from "../components/Team/CTA";
import TeamCard from "../components/Team/TeamCard";
import TeamHeader from "../components/Team/TeamHeader";
import TeamHero from "../components/Team/TeamHero";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

const TeamPage = () => {
  return (
    <div>
      <Header/>
      <TeamHeader />
      <TeamHero />
      <TeamCard/>
      <CTA/>
      <Footer />
    </div>
  );
};
export default TeamPage;
