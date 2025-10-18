import Footer from "./components/footer";
import GetStartedSection from "./components/getStarted";
import FAQSection from "./components/faq";
import VideoTutorial from "./components/tutorial";
import Reason from "./components/reason";
import Testimonials from "./components/testimonials";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="overflow-x-hidden relative">
      <>
        <Navbar/>
          <HeroSection />
          <Reason />
          <Testimonials />
          <VideoTutorial />
          <GetStartedSection />
          <FAQSection />
          <Footer />
        </>
      
    </div>
  );
};

export default App;
