import {
  faCalendar,
  faCar,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import { Sectionheading } from "../../components";
import HIWBox from "../../components/HIW-Box/HIWBox";
import HIWSection from "../../containers/HIW-Section/HIWSection";
import TrendingDeals from "../../containers/Trending-Deals/TrendingDeals";

const Home = () => {
  return (
    <div className="home-page py-5">
      <HIWSection />
      <TrendingDeals />
    </div>
  );
};

export default Home;
