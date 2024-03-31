import { Link, NavLink } from "react-router-dom";
import { Hero, LoadingSkeleton } from "../../components";

import {
  faBolt,
  faFilm,
  faFire,
  faHourglassHalf,
  faHouse,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import { Suspense } from "react";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container">
          <Link className="navbar-brand text-white " to="/">
            <img src="./images/logo.png" alt="Cinepluse logo" />
          </Link>
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
                <NavLink className="nav-link  " aria-current="page" to="/">
                  <FontAwesomeIcon icon={faHouse} style={{ marginRight: 5 }} />
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/now_shownig">
                  <FontAwesomeIcon icon={faFilm} style={{ marginRight: 5 }} />
                  Now Showing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/populare">
                  <FontAwesomeIcon icon={faFire} style={{ marginRight: 5 }} />
                  Populare
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/up_coming">
                  <FontAwesomeIcon
                    icon={faHourglassHalf}
                    style={{ marginRight: 5 }}
                  />
                  Up Coming
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/top_rated">
                  <FontAwesomeIcon icon={faBolt} style={{ marginRight: 5 }} />
                  Top Rated
                </NavLink>
              </li>
              <li className="nav-item main-bg rounded-3 d-flex align-items-center justify-content-center">
                <NavLink className="sButton" to="/search">
                  <FontAwesomeIcon icon={faSearch} style={{ marginRight: 5 }} />
                  Search
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Suspense fallback={<LoadingSkeleton />}>
          <Hero />
        </Suspense>
        <div className="mouse"></div>
      </div>
    </header>
  );
};

export default Header;
