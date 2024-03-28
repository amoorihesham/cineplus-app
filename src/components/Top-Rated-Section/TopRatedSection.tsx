import { MovieProps } from "../../types/props-types";
import { MovieCard } from "..";
import { useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import useAllTRD from "../../utils/hooks/useAllTopRatedData";

const TopRatedSection = () => {
  const queryClient = useQueryClient();

  const {
    data: { results },
    error,
  } = useAllTRD(1);

  if (error) {
    throw error;
  }

  return (
    <div className="section py-5">
      <div className="container">
        <div className="header d-flex align-items-center justify-content-between">
          <h4 className="text-white fw-bold">Top Rated</h4>
          <Link className="p-0 m-0 text-white-50" to={"/top_rated"}>
            View All
          </Link>
        </div>
        <div className="movies-list mt-3">
          <div className="row g-4">
            {results?.slice(0, 4).map((movie: MovieProps) => (
              <div className="col-md-6 col-lg-4 col-xl-3" key={movie.id}>
                <MovieCard data={movie} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRatedSection;
