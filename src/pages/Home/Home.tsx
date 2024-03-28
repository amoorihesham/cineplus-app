import { Suspense } from "react";
import { Section, BannerSection, LoadingSkeleton } from "../../components";
import { getAllComingSoon, getAllNowPlaying } from "../../utils/functions-api";

const Home = () => {
  return (
    <div className="home-page">
      <Suspense fallback={<LoadingSkeleton />}>
        <Section
          sectionName="Now Showing"
          route="nowplaying"
          queryKey="nowPlaying"
          queryFn={() => getAllNowPlaying(1)}
        />
        <Section
          sectionName="Coming Soon"
          route="comingsoon"
          queryKey="comingSoon"
          queryFn={() => getAllComingSoon(1)}
        />
      </Suspense>

      <BannerSection />
    </div>
  );
};

export default Home;
