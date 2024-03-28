import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";

import { getMovieFullDetails, getTopRated } from "../../../utils/functions-api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
  const queryClient = useQueryClient();
  const { data, error } = useSuspenseQuery({
    queryKey: ["Top-Rated"],
    queryFn: getTopRated,
  });
  if (error) {
    console.log(error);
  }
  const topRated = data?.results.slice(0, 1);
  const topID = topRated[0]?.id;
  const { data: movie } = useSuspenseQuery({
    queryKey: ["topMovie"],
    queryFn: () => getMovieFullDetails(topID),
  });

  const hours = Math.floor(movie?.runtime / 60);

  const minuts = movie.runtime - hours * 60;

  return (
    <section className="hero-section d-flex align-items-center">
      <div className="text">
        <p className="fw-bold text-white-50 m-0 p-0">Exclusive Show</p>
        <h1 className="hero-heading my-3 p-0">
          <span>{movie?.title}</span>
        </h1>
        <div className="details d-flex gap-1">
          <p>
            <span className="text-white-50 p-0">Duration: </span>
            <span className="text-white fw-bold">
              {hours}H {minuts}M /
            </span>
          </p>
          <p>
            <span className="text-white-50 p-0"> Ault: </span>
            <span className="text-main-blue fw-bold">
              {movie.adult ? "Yes" : "No"} /
            </span>
          </p>
          <p>
            <span className="text-white-50 p-0">Relase: </span>
            <span className="text-main-blue fw-bold">
              {movie?.release_date}
            </span>
          </p>
        </div>

        <p className="hero-para mb-3 text-white-50">{movie.overview}</p>
        <p className="text-white-50 mb-3">
          Status: <span className="text-white fw-bold">{movie.status}</span>
        </p>
        <button className="btn main-bg text-white  ">
          <FontAwesomeIcon icon={faCirclePlay} style={{ marginRight: 5 }} />
          Trailer
        </button>
      </div>
    </section>
  );
};

export default Hero;
