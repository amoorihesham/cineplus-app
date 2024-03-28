import { useQuery, useQueryClient } from "@tanstack/react-query";
import { searchHandler } from "../../utils/functions-api";
import { FormEvent, useEffect, useState } from "react";
import { LoadingSkeleton, MovieCard } from "../../components";
import { MovieProps } from "../../types/props-types";
import "./style.css";
const Search = () => {
  const [term, setTerm] = useState("");
  const queryClient = useQueryClient();
  const { data, error, isLoading, refetch, isRefetching } = useQuery({
    queryKey: ["search"],
    queryFn: () => searchHandler(term),

    enabled: false,
  });

  if (error) {
    throw error;
  }
  useEffect(() => {
    window.scroll({
      top: 250,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="search-area my-4">
      <div className="container">
        <form
          className="my-4 d-flex align-items-center  gap-4"
          onSubmit={(e: FormEvent) => e.preventDefault()}
        >
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            name="searchInput"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button className="btn main-bg text-white" onClick={() => refetch()}>
            submit
          </button>
        </form>
        <div className="row g-4">
          {isLoading || isRefetching ? (
            <LoadingSkeleton />
          ) : data?.results.length > 0 ? (
            data.results.map((movie: MovieProps) => (
              <div className="col-md-6 col-lg-4 col-xl-3" key={movie.id}>
                <MovieCard data={movie} />
              </div>
            ))
          ) : (
            <h3 className="text-white">No Results Founded</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
