import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { MovieCard } from "../../components";
import { getAllNowPlaying } from "../../utils/functions-api";
import { MovieProps } from "../../types/props-types";
import { useState } from "react";
import ReactPaginate from "react-paginate";

const NowPlaying = () => {
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();
  const { data, error } = useSuspenseQuery({
    queryKey: ["getAllNowPlaying", page],
    queryFn: () => getAllNowPlaying(page),
   
  });

  if (error) {
    throw error;
  }
  return (
    <div className="now-playing-page py-5">
      <div className="container">
        <h2 className="text-white fw-bold h4 mb-4">Now Playing</h2>
        <div className="row g-4">
          {data?.results?.map((movie: MovieProps) => (
            <div className="col-md-6 col-lg-4 col-xl-3" key={movie.id}>
              <MovieCard data={movie} />
            </div>
          ))}
        </div>
        <div className="actions d-flex  align-items-center justify-content-center gap-4 mt-5">
          <button
            disabled={page === data?.total_pages}
            className="btn main-bg text-white order-last w-25"
            onClick={() => setPage((page) => page + 1)}
          >
            Next
          </button>
          <button
            disabled={page === 1}
            className="btn main-bg text-white w-25"
            onClick={() =>
              setPage((page) => (page > 1 ? page - 1 : (page = 1)))
            }
          >
            Previous
          </button>
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;
