import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import useAllPD from "../../../utils/hooks/useAllPopularData";
import { getMovieFullDetails } from "../../../utils/functions-api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import useMovieData from "../../../utils/hooks/useMovieData";
const Hero = () => {
  const queryClient = useQueryClient();
  const {
    data: { results },
    error,
  } = useAllPD(1);

  if (error) {
    console.log(error);
  }
  const [highestPopularMovie] = results?.slice(0, 1);
  const movieID = highestPopularMovie?.id;

  // const { data: movie } = useMovieData(movieID);

  // const hours = Math.floor(movie?.runtime / 60);

  // const minuts = movie.runtime - hours * 60;

  return (
    <section className="hero-section d-flex align-items-center">
      {/* <div className="text">
        <p className="fw-bold text-white-50 m-0 p-0">Exclusive Show</p>
        <h1 className="hero-heading my-3 p-0">
          <span>{movie?.title}</span>
        </h1>
        <div className="details d-flex mb-3">
          <p className="p-0 m-0">
            <span className="text-white-50 p-0">Duration: </span>
            <span className="text-white fw-bold">
              {hours}H {minuts}M /
            </span>
          </p>
          <p className="p-0 m-0">
            <span className="text-white-50 p-0"> Ault: </span>
            <span className="text-main-blue fw-bold">
              {movie.adult ? "Yes" : "No"} /
            </span>
          </p>
          <p className="p-0 m-0">
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
      </div> */}
    </section>
  );
};

export default Hero;
