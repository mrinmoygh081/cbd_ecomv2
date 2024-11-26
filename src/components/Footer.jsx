import { Link } from "react-router-dom";
// imgs import
import logo from "../assets/logo.png";
import { FaFacebookF, FaInstagram, FaX, FaYoutube } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="widgets-section">
          <div className="row clearfix">
            <div className="big-column col-lg-6 col-md-12 col-sm-12">
              <div className="row clearfix">
                <div className="footer-column col-lg-7 col-md-6 col-sm-12">
                  <div className="footer-widget about-widget">
                    <div className="logo">
                      <Link to="/" className="footer_brand">
                        <img src={logo} className="img-fluid" alt="" />
                      </Link>
                    </div>
                    <div className="text">
                      <p>
                        Rosa and Mary CBD LLC was established in January 2021 in
                        Atlanta, Georgia, as part of Black Brown and Green
                        Organics LLC—a vertically integrated hemp and cannabis
                        company. Rosa and Mary CBD serves as a flagship holistic
                        health and wellness center, committed to empowering
                        communities through natural, plant-based solutions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                  <div className="footer-widget links-widget">
                    <h2>Quick Links</h2>
                    <ul className="footer-list">
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="/products">Products</Link>
                      </li>
                      <li>
                        <Link to="/faqs">FAQs</Link>
                      </li>
                      <li>
                        <Link to="/admin">Admin</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="big-column col-lg-6 col-md-12 col-sm-12">
              <div className="row clearfix">
                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget gallery-widget">
                    <h2>Gallery</h2>
                    <div className="widget-content">
                      <figure className="image-box">
                        <img
                          src={require("../assets/gallery/cbd cream.png")}
                          alt=""
                        />
                      </figure>
                      <figure className="image-box">
                        <img
                          src={require("../assets/gallery/delta 8 org.png")}
                          alt=""
                        />
                      </figure>
                      <figure className="image-box">
                        <img
                          src={require("../assets/gallery/delta 8 pie.png")}
                          alt=""
                        />
                      </figure>
                      <figure className="image-box">
                        <img
                          src={require("../assets/gallery/delta 8 ren.png")}
                          alt=""
                        />
                      </figure>
                      <figure className="image-box">
                        <img
                          src={require("../assets/gallery/delta 8 wat.png")}
                          alt=""
                        />
                      </figure>
                      <figure className="image-box">
                        <img
                          src={require("../assets/gallery/milk chocolate.png")}
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                </div>

                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget info-widget">
                    <h2>Contact Info</h2>
                    <ul className="info-list">
                      <li>Atlanta, GA</li>
                      <li>(678)- 979-7420</li>
                      <li>info@rosaandmary.com</li>
                    </ul>
                    <ul className="social-links">
                      <li className="google">
                        <Link
                          to="https://www.youtube.com/watch?v=-lCbuWubIf8"
                          target="_blank"
                        >
                          <FaYoutube />
                        </Link>
                      </li>
                      <li className="facebook">
                        <Link
                          to="https://www.facebook.com/groups/918234122056988/"
                          target="_blank"
                        >
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li className="instagram">
                        <Link
                          to="https://www.instagram.com/cbdcitystores/"
                          target="_blank"
                        >
                          <FaInstagram />
                        </Link>
                      </li>
                      <li className="twitter">
                        <Link
                          to="https://twitter.com/Cityofatlanta/"
                          target="_blank"
                        >
                          <FaX />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row clearfix">
            <div className="column col-lg-6 col-md-12 col-sm-12">
              <div className="copyright">
                <span className="theme_color">CBDCITYALT</span>
                &copy; 2024 All Right Reserved
              </div>
            </div>
            <div className="column col-lg-6 col-md-12 col-sm-12">
              <ul className="footer-nav">
                <li>
                  <Link to="#">Terms of Service</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
