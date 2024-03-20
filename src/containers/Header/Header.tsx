import { Hero } from "../../components";
import "./style.css";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container">
          <a className="navbar-brand text-white" href="/">
            CinePlus
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/cars">
                  Trending
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Hero />
      </div>
    </header>
  );
};

export default Header;
