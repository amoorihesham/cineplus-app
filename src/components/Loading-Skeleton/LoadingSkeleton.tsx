import Skeleton from "react-loading-skeleton";

const LoadingSkeleton = () => {
  return (
    <div className="loading-skeleton py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4 col-xl-3">
            <Skeleton count={5} baseColor="#0a141f" />
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <Skeleton count={5} baseColor="#0a141f" />
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <Skeleton count={5} baseColor="#0a141f" />
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <Skeleton count={5} baseColor="#0a141f" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 col-xl-3">
            <Skeleton count={5} baseColor="#0a141f" />
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <Skeleton count={5} baseColor="#0a141f" />
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <Skeleton count={5} baseColor="#0a141f" />
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <Skeleton count={5} baseColor="#0a141f" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
