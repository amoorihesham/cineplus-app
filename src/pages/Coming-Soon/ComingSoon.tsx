import { useEffect, useState } from "react";
import { getAllComingSoon } from "../../utils/functions-api";
import { Section } from "../../components";

const ComingSoon = () => {
  const [comingSoonList, setCominSoonList] = useState([]);

  const getAllComingSoonList = async (pagenum: number) => {
    const movies = await getAllComingSoon(pagenum);
    setCominSoonList(movies.results);
  };

  useEffect(() => {
    getAllComingSoonList(1);
  }, []);
  return (
    <div className="coming-soon-page">
      <div className="container">
        <Section sectionName="Coming Soon" nowPlayingList={comingSoonList} />
        <button
          className="btn main-bg text-white"
          onClick={() => getAllComingSoonList(2)}
        >
          more
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;
