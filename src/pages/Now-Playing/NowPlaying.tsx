import React, { useEffect, useState } from "react";
import { getAllNowPlaying } from "../../utils/functions-api";
import { Section } from "../../components";

const NowPlaying = () => {
  const [moviesList, setMoviesList] = useState([]);
  const getAllMovies = async () => {
    const movies = await getAllNowPlaying();
    setMoviesList(movies.results);
  };
  useEffect(() => {
    getAllMovies();
  }, []);
  return (
    <div className="now-playing-page">
      <Section sectionName="Now Playing" nowPlayingList={moviesList} />
    </div>
  );
};

export default NowPlaying;
