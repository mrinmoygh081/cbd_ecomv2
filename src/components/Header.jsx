import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { apiCallBack } from "../utils/fetchAPIs";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [cat, setCat] = useState(null);

  const getCat = async () => {
    const d = await apiCallBack("GET", "allCategory", null, null);
    if (d?.status) {
      setCat(d?.data);
    }
  };

  useEffect(() => {
    getCat();
  }, []);

  return (
    <>
      {/* desktop header */}
      <div className="d-none d-md-block">
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
                    <Link to={"/faqs"}>FAQ</Link>
                  </li>
                  <li>
                    <Link to={"/coffee"}>Coffee</Link>
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
                  <Link to="/">
                    <img src={require("../assets/cbd.jpeg")} alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-md-7">
                <div className="header_middle">
                  <ul>
                    {cat &&
                      cat.map((item, i) => (
                        <li key={i}>
                          <Link to={`/products?cat_id=${item?.cat_id}`}>
                            {item?.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="header_right">
                  <ul>
                    <li className="no_btn">
                      <FaSearch onClick={() => setIsSearch(true)} />
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
      </div>
      {/* mobile header  */}
      <div className="d-block d-md-none">
        <div className="header_mobile">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-6">
                <div className="logo_mobile">
                  <img src={require("../assets/cbd.jpeg")} alt="" />
                </div>
              </div>
              <div className="col-2">
                <div className="header_mobile d-flex">
                  <IoMenu onClick={() => setIsActive(true)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sidebar */}
      <div className={isActive ? "sidebar active" : "sidebar"}>
        <div className="sidebar_header">
          <img src={require("../assets/cbd.jpeg")} alt="" />
          <button className="no_btn">
            <RxCross2 onClick={() => setIsActive(false)} />
          </button>
        </div>
        <ul className="sidebar_nav">
          <li>
            <Link to={"/"}>HOME</Link>
          </li>
          <li>
            <Link to={"/products"}>PRODUCTS</Link>
          </li>
          <li>
            <Link to={"/wishlist"}>WISHLIST</Link>
          </li>
          <li>
            <Link to={"/orders"}>YOUR ORDERS</Link>
          </li>
        </ul>
      </div>
      {/* search popup */}
      <div className={isSearch ? "search active" : "search"}>
        <div className="sidebar_header">
          <img src={require("../assets/cbd.jpeg")} alt="" />
          <button className="no_btn">
            <RxCross2 onClick={() => setIsSearch(false)} />
          </button>
        </div>
        <div className="search_box">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Eg: CBG Cream..."
            className="form-control"
            autoComplete="off"
          />
          <button className="btn_style">
            <FaSearch />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
