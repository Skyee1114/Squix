import Header from "../../components/Header";
import IntroSection from "../../components/IntroSection";
import News from "../../components/News";
import ModelPage from "../../components/Models/ModelPage";
import Footer from "../../components/Footer";
import FAQ from "../../components/FAQ";
import RoadMap from "../../components/RoadMap";
import Careers from "../../components/Careers";
import HelpUs from "../../components/HelpUs";
import Team from "../../components/Team";

const Dashboard = () => {
  return (
    <div className="bg-[url('./assets/img/bgleft.jpg')] bg-center w-full h-[1123px] z-0 relative ">
      <div className="bg-gray-gradient">
        <div className="pt-12 max-w-[1520px] mx-auto">
          <Header />
          <IntroSection />
        </div>
        <div className=" bg-[#020911]">
          <div className="max-w-[1520px] mx-auto">
            <News />
          </div>
        </div>
      </div>
      <ModelPage />
      <FAQ />
      <RoadMap />
      <HelpUs />
      <Team />
      <Careers />
      <Footer />
    </div>
  );
};

export default Dashboard;
