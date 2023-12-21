import CTA from "../components/Team/CTA";
import TeamCard from "../components/Team/TeamCard";
import TeamHeader from "../components/Team/TeamHeader";
import TeamHero from "../components/Team/TeamHero";
import Footer from "../layout/Footer";

const TeamPage = () => {
  return (
    <div>
      <TeamHeader />
      <TeamHero />
      <TeamCard/>
      <CTA/>
      <Footer />
    </div>
  );
};
export default TeamPage;
