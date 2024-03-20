import { SectionProps } from "../../types/props-types";
import { MovieCard } from "../";

const Section = ({ sectionName, nowPlayingList }: SectionProps) => {
  return (
    <div className="section py-5">
      <div className="container">
        <div className="header d-flex align-items-center justify-content-between">
          <h4 className="text-white fw-bold">{sectionName}</h4>
          <p className="p-0 m-0 text-white-50">View All</p>
        </div>
        <div className="movies-list mt-3">
          <div className="row g-4">
            {nowPlayingList?.map((movie) => (
              <div className="col-md-3" key={movie.id}>
                <MovieCard data={movie} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
