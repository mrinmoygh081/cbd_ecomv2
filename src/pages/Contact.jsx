import React from "react";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaPhone,
  FaX,
} from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

import { MdMail } from "react-icons/md";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="contact_page">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-8 col-12">
              <div className="contact_card">
                <div className="pb-3">
                  <h1>
                    <i>Contact Us</i>
                  </h1>
                  <p>Please feel free to contact us if you've any enquiry.</p>
                </div>
                <form>
                  <div className="mb-2">
                    <label htmlFor="name">NAME</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="phone">PHONE</label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="email">EMAIL</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message">MESSAGE</label>
                    <textarea
                      name="message"
                      id=""
                      cols="30"
                      rows="6"
                      className="form-control"
                    ></textarea>
                  </div>
                  <button className="btn_style">SUBMIT</button>
                </form>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="contact_card">
                <ul className="contact_info">
                  <li>
                    <FaMapMarkerAlt /> Flat 20, Reynolds Neck, North Hele
                    naville, FV77 8WS
                  </li>
                  <li>
                    <FaPhone /> +2(305) 587-3407
                  </li>
                  <li>
                    <MdMail /> info@morris.com
                  </li>
                </ul>
                <ul className="social_links">
                  <li className="google">
                    <Link to="#" target="_blank">
                      <FaGooglePlusG />
                    </Link>
                  </li>
                  <li className="facebook" target="_blank">
                    <Link to="#">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li className="instagram" target="_blank">
                    <Link to="#">
                      <FaInstagram />
                    </Link>
                  </li>
                  <li className="twitter" target="_blank">
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
    </>
  );
};

export default Contact;
