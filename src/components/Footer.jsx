import { Link } from "react-router-dom";
// imgs import
import logo from "../assets/cbd.jpeg";
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaX } from "react-icons/fa6";

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
                        At CBD CITY, we&apos;re dedicated to bringing you the
                        finest quality CBD products sourced from reputable
                        suppliers around the globe. Whether you&apos;re seeking
                        relief from pain, stress, anxiety, or simply looking to
                        enhance your overall wellness, we have a wide range of
                        premium CBD products to meet your needs.
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
                      <div className="http://t.commonsupport.com/morris/images-outer clearfix">
                        <figure className="image-box">
                          <Link
                            to="#"
                            className="lightbox-image"
                            data-fancybox="footer-gallery"
                            title="Image Title Here"
                            data-fancybox-group="footer-gallery"
                          >
                            <img
                              src="https://i.ibb.co/CKNmhMX/blog1.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                        <figure className="image-box">
                          <Link
                            to="#"
                            className="lightbox-image"
                            data-fancybox="footer-gallery"
                            title="Image Title Here"
                            data-fancybox-group="footer-gallery"
                          >
                            <img
                              src="https://i.ibb.co/m5yGbdR/blog2.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                        <figure className="image-box">
                          <Link
                            to="#"
                            className="lightbox-image"
                            data-fancybox="footer-gallery"
                            title="Image Title Here"
                            data-fancybox-group="footer-gallery"
                          >
                            <img
                              src="https://i.ibb.co/CKNmhMX/blog1.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                        <figure className="image-box">
                          <Link
                            to="#"
                            className="lightbox-image"
                            data-fancybox="footer-gallery"
                            title="Image Title Here"
                            data-fancybox-group="footer-gallery"
                          >
                            <img
                              src="https://i.ibb.co/m5yGbdR/blog2.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                        <figure className="image-box">
                          <Link
                            to="#"
                            className="lightbox-image"
                            data-fancybox="footer-gallery"
                            title="Image Title Here"
                            data-fancybox-group="footer-gallery"
                          >
                            <img
                              src="https://i.ibb.co/CKNmhMX/blog1.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                        <figure className="image-box">
                          <Link
                            to="#"
                            className="lightbox-image"
                            data-fancybox="footer-gallery"
                            title="Image Title Here"
                            data-fancybox-group="footer-gallery"
                          >
                            <img
                              src="https://i.ibb.co/m5yGbdR/blog2.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget info-widget">
                    <h2>Contact Info</h2>
                    <ul className="info-list">
                      <li>
                        Flat 20, Reynolds Neck, North Hele naville, FV77 8WS
                      </li>
                      <li>+2(305) 587-3407</li>
                      <li>info@morris.com</li>
                    </ul>
                    <ul className="social-links">
                      <li className="google">
                        <Link to="#">
                          <FaGooglePlusG />
                        </Link>
                      </li>
                      <li className="facebook">
                        <Link to="#">
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li className="instagram">
                        <Link to="#">
                          <FaInstagram />
                        </Link>
                      </li>
                      <li className="twitter">
                        <Link to="#">
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
