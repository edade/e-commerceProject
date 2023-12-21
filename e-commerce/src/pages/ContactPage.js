import Contact from "../components/ContactPage/Contact";
import ContactHeader from "../components/ContactPage/ContactHeader";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

const ContactPage = () => {
  return (
    <div>
      <Header />
      <ContactHeader/>
      <Contact/>
      <Footer />
    </div>
  );
};
export default ContactPage;
