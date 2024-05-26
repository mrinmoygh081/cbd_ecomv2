import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoMdArrowDropright } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { apiCallBack } from "../utils/fetchAPIs";
import { useDispatch, useSelector } from "react-redux";
import { logoutHandler } from "../redux/slices/loginSlice";
import { checkTypeArr, inputChange, reConfirm } from "../Helper/smallFun";
import { toast } from "react-toastify";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { token, name } = useSelector((state) => state.auth);
  const { numOfItems } = useSelector((state) => state.cart2);
  const [isActive, setIsActive] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [cat, setCat] = useState(null);
  const [search, setSearch] = useState({
    searchKey: "",
    searchValue: "",
  });
  const [toggleMenu, setToggleMenu] = useState(null);
  const [subToggleMenu, setSubToggleMenu] = useState(null);

  const getCat = async () => {
    try {
      let categories = "";
      const res = await apiCallBack("GET", "user/category", null, null);
      if (res.status) {
        categories = res.data;
        setCat(categories);
      }
    } catch (error) {
      console.error("Error fetching products by category:", error);
      throw error;
    }
  };

  const logOutFun = () => {
    dispatch(logoutHandler());
    navigate("/");
    // Persistor.pause();
    // Persistor.flush().then(() => {
    //   return Persistor.purge();
    // });
  };

  useEffect(() => {
    setIsActive(false);
    setIsSearch(false);
  }, [location?.pathname, location?.search]);

  const searchHandler = async () => {
    if (search?.searchKey === "") {
      return toast.warn("Please enter a search key!");
    }
    const d = await apiCallBack("POST", "user/product", search, null);
    setSearch({ ...search, searchValue: d?.data });
  };

  useEffect(() => {
    getCat();
  }, []);

  return (
    <>
      {/* Desktop Header */}
      <div className="top_head">
        <div className="topbar">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4">
                <ul className="topbar_left">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/about"}>About</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>contact</Link>
                  </li>
                  <li>
                    <Link to={"/faqs"}>FAQ</Link>
                  </li>
                  <li>
                    <Link to={"/coffee"}>Coffee</Link>
                  </li>
                  <li>
                    <Link to={"/news"}>News</Link>
                  </li>
                  <li>
                    <Link to={"/testimonials"}>Testimonials</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <ul className="topbar_right">
                  <li>
                    <Link to={"/wishlist"}>WISHLIST</Link>
                  </li>
                  {token && (
                    <>
                      <li>
                        <Link to={"/orders"}>ORDERS</Link>
                      </li>
                    </>
                  )}
                  {token ? (
                    <>
                      <li>
                        <div className="d-flex justify-content-center">
                          <span className="name">{name && name}</span>
                          <button
                            onClick={() =>
                              reConfirm(
                                { file: true },
                                logOutFun,
                                "You're going to Logout!"
                              )
                            }
                            className="btn btn-sm btn-danger"
                          >
                            Logout?
                          </button>
                        </div>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <Link to={"/signup"}>SIGNUP</Link>
                      </li>
                      <li>
                        <Link to={"/login"}>LOGIN</Link>
                      </li>
                    </>
                  )}
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
              <div className="col-md-8">
                <div className="header_middle">
                  <ul>
                    {checkTypeArr(cat) &&
                      cat.map((item, i) => {
                        return (
                          <li key={i} className="megamenu">
                            <Link to={`/products?cat_id=${item?.cat_id}`}>
                              {item?.name}
                            </Link>
                            {checkTypeArr(item?.children) &&
                              item?.children.length > 0 && (
                                <ul className="drop">
                                  {item.children.map((it, index) => (
                                    <li key={index}>
                                      <Link
                                        to={`/products?cat_id=${it?.cat_id}`}
                                      >
                                        {it?.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
                <div className="header_right">
                  <ul>
                    <li className="no_btn">
                      <FaSearch onClick={() => setIsSearch(true)} />
                    </li>
                    <li>
                      <Link to={"/cart"} className="relative">
                        <FaCartShopping />
                        <span className="sup">{numOfItems}</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Header  */}
      <div className="header_mobile">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-6">
              <div className="logo_mobile">
                <Link to={"/"}>
                  <img src={require("../assets/cbd.jpeg")} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-3">
              <div className="header_mobile d-flex justify-content-between">
                <FaSearch
                  onClick={() => setIsSearch(true)}
                  className="search_icon"
                />
                <IoMenu onClick={() => setIsActive(true)} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sidebar */}
      <div className={isActive ? "sidebar active" : "sidebar"}>
        <div className="sidebar_header">
          <img src={require("../assets/cbd.jpeg")} alt="" />
          <div>
            <button className="no_btn">
              <RxCross2 onClick={() => setIsActive(false)} />
            </button>
          </div>
        </div>
        <div className="sidebar_nav">
          <ul>
            <li>
              <Link to={"/"}>HOME</Link>
            </li>
            <li className="drop_down">
              <div
                className={
                  toggleMenu === "CATEGORIES" ? "mob_drop open" : "mob_drop"
                }
                onClick={() => {
                  if (toggleMenu === "CATEGORIES") {
                    setToggleMenu(null);
                    setSubToggleMenu(null);
                  } else {
                    setToggleMenu("CATEGORIES");
                  }
                }}
              >
                CATEGORIES
                <IoMdArrowDropright />
              </div>
              {toggleMenu === "CATEGORIES" && (
                <ul>
                  {checkTypeArr(cat) &&
                    cat.map((item, i) => {
                      return (
                        <li key={i}>
                          {checkTypeArr(item?.children) &&
                          item?.children.length > 0 ? (
                            <div
                              className={
                                subToggleMenu === item?.name
                                  ? "mob_drop open"
                                  : "mob_drop"
                              }
                              onClick={() => {
                                if (subToggleMenu === item?.name) {
                                  setSubToggleMenu(null);
                                } else {
                                  setSubToggleMenu(item?.name);
                                }
                              }}
                            >
                              {item?.name}
                              <IoMdArrowDropright />
                            </div>
                          ) : (
                            <Link to={`/products?cat_id=${item?.cat_id}`}>
                              {item?.name}
                            </Link>
                          )}
                          {checkTypeArr(item?.children) &&
                            item?.children.length > 0 &&
                            subToggleMenu === item?.name && (
                              <ul className="drop">
                                {item.children.map((it, index) => (
                                  <li key={index}>
                                    <Link to={`/products?cat_id=${it?.cat_id}`}>
                                      {it?.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                        </li>
                      );
                    })}
                </ul>
              )}
            </li>
            <li>
              <Link to={"/wishlist"}>WISHLIST</Link>
            </li>
            {token && (
              <>
                <li>
                  <Link to={"/orders"}>MY ORDERS</Link>
                </li>
              </>
            )}
            <li>
              <Link to={"/cart"}>CART</Link>
            </li>
            <li>
              <Link to={"/about"}>ABOUT</Link>
            </li>
            <li>
              <Link to={"/contact"}>CONTACT</Link>
            </li>
            <li>
              <Link to={"/faqs"}>FAQ</Link>
            </li>
            <li>
              <Link to={"/coffee"}>COFFEE</Link>
            </li>
            <li>
              <Link to={"/news"}>NEWS</Link>
            </li>
            <li>
              <Link to={"/testimonials"}>TESTIMONIALS</Link>
            </li>
            {token ? (
              <>
                <li>
                  <Link
                    to={"/"}
                    onClick={() =>
                      reConfirm(
                        { file: true },
                        logOutFun,
                        "You're going to Logout!"
                      )
                    }
                  >
                    LOGOUT?
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to={"/login"}>LOGIN</Link>
                </li>
                <li>
                  <Link to={"/signup"}>SIGNUP</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      {/* search popup */}
      <div className={isSearch ? "search active" : "search"}>
        <div className="sidebar_header">
          <img src={require("../assets/cbd.jpeg")} alt="" />
          <button className="no_btn">
            <RxCross2 onClick={() => setIsSearch(false)} />
          </button>
        </div>
        <div className="search_sug">
          <div className="search_box">
            <input
              type="text"
              name="searchKey"
              id="search"
              placeholder="Eg: CBD Cream..."
              className="form-control"
              autoComplete="off"
              value={search?.searchKey}
              onChange={(e) => inputChange(e, search, setSearch)}
            />
            <button className="btn_style" onClick={searchHandler}>
              <FaSearch />
            </button>
          </div>
          <div className="suggest">
            <ul>
              {checkTypeArr(search?.searchValue) &&
                search.searchValue.map((item, i) => (
                  <li key={i}>
                    <Link
                      to={`/product/${item?.product_id}`}
                      onClick={() => {
                        setIsSearch(false);
                        setSearch({
                          searchKey: "",
                          searchValue: "",
                        });
                      }}
                    >
                      {item?.name}
                    </Link>
                  </li>
                ))}
              {search?.searchValue === "No data found" && (
                <>
                  <li>NO PRODUCT FOUND!</li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
