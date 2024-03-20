import { Section } from "../../components";
import BannerSection from "../../components/Banner-Section/BannerSection";
import { getComingSoon, getNowPlaying } from "../../utils/functions-api";
import { useEffect, useState } from "react";

const Home = () => {
  const [nowPlayingList, setNowPlayingList] = useState([]);
  const [comingSoonList, setComingSoonList] = useState([]);
  const getMovies = async () => {
    const nowPlaying = await getNowPlaying();
    const comingSoon = await getComingSoon();
    setNowPlayingList(nowPlaying);
    setComingSoonList(comingSoon);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="home-page">
      <Section sectionName="Now Showing" nowPlayingList={nowPlayingList} />
      <Section sectionName="Coming Soon" nowPlayingList={comingSoonList} />
      <BannerSection />
    </div>
  );
};

export default Home;
