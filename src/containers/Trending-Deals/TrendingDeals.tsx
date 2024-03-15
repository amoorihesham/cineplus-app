import { Sectionheading } from "../../components";
import "./style.css";

const TrendingDeals = () => {
  return (
    <section className="trending-deals py-5">
      <Sectionheading
        heading="Trending Rental"
        highlight="Deals"
        text="Most Populare Cars For Rental Deals"
      />
      <div className="container"></div>
    </section>
  );
};

export default TrendingDeals;
