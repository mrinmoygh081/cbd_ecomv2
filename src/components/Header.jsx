import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { apiCallBack } from "../utils/fetchAPIs";
import { useDispatch, useSelector } from "react-redux";
import { logoutHandler } from "../redux/slices/loginSlice";
import { reConfirm } from "../Helper/smallFun";
import { checkTypeArr } from "../utils/smailFun";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, name } = useSelector((state) => state.auth);
  const [isActive, setIsActive] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [productByCat, setProductByCat] = useState(null);
  const [cat, setCat] = useState(null);

  const getCat = async () => {
    const d = await apiCallBack("GET", "allCategory", null, null);
    if (d?.status) {
      setCat(d?.data);
    }
  };

  const getProductsByCat = async () => {
    try {
      // Fetch all categories
      let result = [];
      let categories = "";
      const res = await apiCallBack("GET", "allCategory", null, null);
      if (res.status) {
        categories = res.data;
      }
      if (checkTypeArr(categories)) {
        await Promise.all(
          await categories.map(async (item, index) => {
            const products = await apiCallBack(
              "POST",
              "user/product",
              {
                catId: item?.cat_id,
              },
              null
            );
            result.push({ cat_name: item.name, products: products.data });
          })
        );
      }
      setProductByCat(result);
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
    getCat();
    getProductsByCat();
  }, []);

  console.log(productByCat);

  return (
    <>
      {/* Desktop Header */}
      <div className="d-none d-md-block top_head">
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
                </ul>
              </div>
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <ul className="topbar_right">
                  {token && (
                    <>
                      <li>
                        <Link to={"/wishlist"}>WISHLIST</Link>
                      </li>
                      <li>
                        <Link to={"/orders"}>ORDERS</Link>
                      </li>
                    </>
                  )}
                  <li>
                    {token ? (
                      <>
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
                      </>
                    ) : (
                      <Link to={"/login"}>LOGIN</Link>
                    )}
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
                    {checkTypeArr(productByCat) &&
                      productByCat.map((item, i) => (
                        <li key={i} className="megamenu">
                          <Link to={`/products?cat_id=${item?.cat_id}`}>
                            {item?.cat_name}
                          </Link>
                          <ul className="drop">
                            {checkTypeArr(item?.products) &&
                              item.products.map((it, index) => (
                                <li key={index}>
                                  <Link to={`/product/${it?.product_id}`}>
                                    {it?.name}
                                  </Link>
                                </li>
                              ))}
                          </ul>
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
      {/* Mobile Header  */}
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
