const Hero = () => {
  return (
    <section className="hero-section d-flex align-items-center">
      <div className="text">
        <p className="fw-bold text-white-50 m-0 p-0">Exclusive Show</p>
        <h1 className="hero-heading my-3 p-0">
          Avatar: <span>The Way Of Water</span>
        </h1>
        <p className="text-white-50 mb-3 p-0">3h 12m # PG-13 # 2022</p>
        <p className="hero-para mb-3 text-white-50">
          Explore Our Fleet Of Top-Quality vehicles And Enjoy A Hasslefree
          Rental Experiance.Whether It's A Business Trip Or Weekend
          Getaway,We've Got The Perfect Ride For You.
        </p>
        <p className="text-white-50 mb-3">
          Director: <span className="text-white fw-bold">Amr Hesham</span>
        </p>
        <button className="btn main-bg text-white  ">Trailer</button>
      </div>
    </section>
  );
};

export default Hero;
