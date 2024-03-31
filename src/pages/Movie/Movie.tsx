import { useParams } from "react-router-dom";
import useMovieData from "../../utils/hooks/useMovieData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { ProviderTypes } from "../../types/props-types";
import ReactPlayer from "react-player/youtube";
import "./style.css";

const Movie = () => {
  const { id } = useParams();

  const {
    MovieData,
    VideosData: { results },
    ProvidersData,
  } = useMovieData(id);

  const hours = Math.floor(MovieData?.runtime / 60);
  console.log(ProvidersData);
  let Countries = [];
  for (const prop in ProvidersData) {
    Countries.push(prop);
  }
  console.log(Countries);
  const minuts = MovieData.runtime - hours * 60;
  const videos = results.slice(0, 5);
  const vidsIDS = videos.map((video: any) => video.key);

  return (
    <div className="movie-page py-5">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6">
            <div className="name-area">
              <h4 className="text-white m-0 h1">{MovieData.original_title}</h4>
              <div className="time-details d-flex align-items-center gap-2">
                <p className="text-white-50 p-0 m-0">
                  {MovieData.release_date.split("-")[0]},
                </p>
                <p className="text-white-50 p-0 m-0">{hours}H</p>
                <p className="text-white-50 p-0 m-0">{minuts}M</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="act-area">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <div className="box text-center">
                    <p className="text-white p-0 m-0 fw-bold mb-1">
                      IMDB Rating
                    </p>
                    <p className="pill ">
                      <FontAwesomeIcon
                        icon={faStar}
                        color="gold"
                        style={{ marginRight: 3 }}
                      />
                      <span className="fw-bold fs-6">
                        {MovieData.vote_average.toFixed(2)}
                      </span>
                      /<span className="text-white-50">10</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="box text-center">
                    <p className="text-white p-0 m-0 fw-bold mb-1">
                      Rating Count
                    </p>
                    <p className="pill  ">
                      <FontAwesomeIcon
                        icon={faUser}
                        color="gray"
                        style={{ marginRight: 3 }}
                      />
                      <span className="fw-bold fs-6">
                        {MovieData.vote_count}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="box text-center">
                    <p className="text-white p-0 m-0 fw-bold mb-1">language</p>
                    <p className="pill  ">
                      <span className="fw-bold fs-6 text-main-blue">
                        {MovieData.original_language}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 g-4">
          <div className="col-md-12 col-lg-3 col-xl-3">
            <img
              src={`https://image.tmdb.org/t/p/original${MovieData.poster_path}`}
              alt={`${MovieData.original_title} Poster`}
              className="img-responsive"
            />
          </div>
          <div className="col-md-12 col-lg-9 col-xl-9">
            <ReactPlayer
              url={`https://youtube.com/watch?v=${vidsIDS[0]}`}
              controls
              // width={990}
              // height={459}
              style={{ width: 990 }}
            />
          </div>
        </div>
        <div className="cates d-flex align-items-center gap-3">
          {MovieData.genres.map((gen: { id: number; name: string }) => (
            <p
              key={gen.id}
              className="cate-pill p-0 m-0 text-white  p-1 rounded-4 px-3 text-center fw-bold mt-3"
            >
              {gen.name}
            </p>
          ))}
        </div>
        <div className="desc mt-3">
          <p className="overview">{MovieData.overview}</p>
        </div>
        <div className="informative mt-4">
          <h4 className="text-white m-0 p-0">Countries</h4>
          <div className="scroll">
            <div className="content d-flex gap-2 overflow-x-scroll py-3">
              {Countries?.map((country) => (
                <p
                  className="cate-pill p-0 m-0 text-white  p-1 rounded-4 px-3 text-center fw-bold mt-3"
                  key={country}
                >
                  {country}
                </p>
              ))}
            </div>
            <div className="slide"></div>
          </div>
          {/* <div className="row g-2">
            {Providers?.map((prov: ProviderTypes) => (
              <div className="col-md-3" key={prov.provider_id}>
                <div className="p-box">
                  <img
                    src={`https://image.tmdb.org/t/p/original${prov.logo_path}`}
                    alt="tet"
                  />
                  <p className="text-white mt-2 fw-bold">
                    {" "}
                    {prov.provider_name}
                  </p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Movie;
