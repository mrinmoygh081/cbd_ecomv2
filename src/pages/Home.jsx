import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import ProductBuyNow from "../components/ProductBuyNow";
import { Link } from "react-router-dom";
import { apiCallBack } from "../utils/fetchAPIs";
import { checkTypeArr } from "../utils/smailFun";
import FAQSection from "../components/FAQSection";
import { faqData } from "../data/data";

const Home = () => {
  const [cat, setCat] = useState(null);
  const [products, setProducts] = useState(null);

  const getCat = async () => {
    const d = await apiCallBack("GET", "allCategory", null, null);
    if (d?.status) {
      setCat(d?.data);
    }
  };

  const getProductsByType = async () => {
    // let obj = {
    //   type: 1,
    //   take: 3,
    // };
    const d = await apiCallBack("POST", "user/product", null, null);
    if (d?.status) {
      setProducts(d?.data);
    }
  };

  useEffect(() => {
    getCat();
    getProductsByType();
  }, []);

  return (
    <>
      <div className="hero">
        <img src={require("../assets/imgs/4.png")} alt="" />
      </div>
      <section className="product_section">
        <div className="section_head">
          <img src={require("../assets/imgs/1.png")} alt="" />
          <h2>CATEGORIES</h2>
        </div>
        <div className="container">
          <div className="section_header">
            <h3>CBD Products Range</h3>
            <p>
              A collection of the Finest CBD Products. Something for everyone.
            </p>
          </div>
          <div className="row">
            {cat &&
              cat.map((item, i) => (
                <Product
                  name={item?.name}
                  id={item?.cat_id}
                  image={item?.image}
                  key={i}
                />
              ))}
          </div>
        </div>
      </section>
      <section className="section_about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 col-12">
              <img src={require("../assets/imgs/coffee2.jpg")} alt="" />
            </div>
            <div className="col-md-8 col-12">
              <div className="section_text">
                <h2>About CBD City</h2>
                <p>
                  CBD City LLC was established jan 2021 in Atlanta Georgia as
                  part of Black Brown and Green Organics LLC vertically
                  integrated Hemp and Cannabis company as retail flagship
                  holistic health and wellness center.
                </p>
                <p>
                  Inspired by Dr. Rapheal Mechoulam Known as Father of Cannabis
                  Research from Israel was the first to isolate the psychoactive
                  compound of the cannabis plant -tetrahydrocannabinol or THC.
                  Which led to thousands of clinical studies throughout the
                  world.
                </p>
                <p>
                  As early as 2737 B.C. the mystical Emperor Shen Neng of China
                  was prescribing majuana tea for treatment of gout,rheumatism,
                  malaria and for memory loss. Based on years of clinical
                  studies of the whole body medical benefits from the hemp and
                  cannabis plants.
                </p>
                <Link to={"/about"} className="btn_style">
                  EXPLORE MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product_section">
        <div className="section_head">
          <img src={require("../assets/imgs/124r.png")} alt="" />
          <h2 style={{ transform: "translate(-50%, -10%)" }}>
            FEATURED PRODUCTS
          </h2>
        </div>
        <div className="container">
          <div className="section_header">
            <h2>This Week's Special Offers</h2>
            <p>
              These CBD SALE items offer BIG Discounts on some Amazing products.
            </p>
          </div>
          <div className="product-cards__slider">
            <div className="row">
              {checkTypeArr(products) &&
                products
                  .filter((item) => item.type === 2)
                  .map((item, i) => (
                    <ProductBuyNow
                      p_id={item?.product_id}
                      name={item?.name}
                      price={item?.price}
                      image={item?.image}
                      key={i}
                      item={item}
                    />
                  ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqData={faqData} />
    </>
  );
};

export default Home;
