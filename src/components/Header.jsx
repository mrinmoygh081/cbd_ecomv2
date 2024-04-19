import React from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <ul className="topbar_left">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/about"}>About us</Link>
                </li>
                <li>
                  <Link to={"/contact"}>contact us</Link>
                </li>
                <li>
                  <Link to={"/FAQ"}>FAQ</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <ul className="topbar_right">
                <li>
                  <Link to={"/wishlist"}>WISHLIST</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-2">
              <div className="header_left">
                <img src={require("../assets/cbd.jpeg")} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="header_middle">
                <ul>
                  <li>
                    <Link to={"/"}>OILS</Link>
                  </li>
                  <li>
                    <Link to={"/"}>CAPSULES</Link>
                  </li>
                  <li>
                    <Link to={"/"}>PATCHES</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="header_right">
                <ul>
                  <li>
                    <Link to={"/cart"}>
                      <FaSearch />
                    </Link>
                  </li>
                  <li>
                    <Link to={"/cart"}>
                      <FaCartShopping />
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

export default Header;
