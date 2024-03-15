import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const Footer = () => {
  return (
    <footer>
      <div className="overlay d-lg-flex align-items-center ">
        <div className="container">
          <section className="main-footer-section d-flex align-items-center justify-content-between">
            <div className="left-box">
              <a href="/" className="mb-4  d-block">
                MeshWaar
              </a>
              <p className="footer-left-box-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                quam ex nesciunt neque sint quibusdam architecto fuga earum
                nihil,
              </p>
            </div>
            <div className="mid-box">
              <h3 className="footer-box-title h5 mb-4">Contact</h3>
              <ul className="list-unstyled p-0 m-0 text-white">
                <li>
                  <FontAwesomeIcon
                    icon={faLocationArrow}
                    fixedWidth
                    style={{ marginRight: 5, marginTop: 6 }}
                  />
                  <span className="mt-0 pt-0">
                    3915 NW 25th St, Miami, Florida,USA
                  </span>
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    fixedWidth
                    style={{ marginRight: 5, marginTop: 6 }}
                  />
                  <span>contact@mail.com</span>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faPhone}
                    fixedWidth
                    style={{ marginRight: 5, marginTop: 6 }}
                  />
                  <span>305-905-8099</span>
                </li>
              </ul>
            </div>
            <div className="right-box">
              <h3 className="footer-box-title h5 mb-4">Usefull Links</h3>
              <ul className="list-unstyled p-0 m-0">
                <li className="mb-2">
                  <a
                    href="/home"
                    className="text-decoration-none text-black-50"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/gallary"
                    className="text-decoration-none text-black-50"
                  >
                    Gallary
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/offers"
                    className="text-decoration-none text-black-50"
                  >
                    Offers
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
