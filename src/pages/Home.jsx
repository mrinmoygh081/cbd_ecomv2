import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import ProductBuyNow from "../components/ProductBuyNow";
import { Link } from "react-router-dom";
import { apiCallBack } from "../utils/fetchAPIs";
import FAQSection from "../components/FAQSection";
import { faqData, vidData } from "../data/data";
import YtIfram from "../components/YtIfram";
import { checkTypeArr } from "../Helper/smallFun";

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
              cat.map(
                (item, i) =>
                  item?.parent_id === 0 && (
                    <Product
                      name={item?.name}
                      id={item?.cat_id}
                      image={item?.image}
                      key={i}
                    />
                  )
              )}
          </div>
        </div>
      </section>
      <section className="section_about">
        <div className="section_head">
          <img src={require("../assets/partner_banner.png")} alt="" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 col-12">
              <img src={require("../assets/imgs/coffee2.jpg")} alt="" />
            </div>
            <div className="col-md-8 col-12">
              <div className="section_text">
                <h2>About Rosa and Mary CBD</h2>
                <p>
                  Rosa and Mary CBD LLC was established in January 2021 in
                  Atlanta, Georgia, as part of Black Brown and Green Organics
                  LLC—a vertically integrated hemp and cannabis company. Rosa
                  and Mary CBD serves as a flagship holistic health and wellness
                  center, committed to empowering communities through natural,
                  plant-based solutions.
                </p>
                <p>
                  Inspired by the groundbreaking work of Dr. Raphael Mechoulam,
                  renowned as the "Father of Cannabis Research" from Israel,
                  Rosa and Mary CBD draws on his pioneering studies. Dr.
                  Mechoulam was the first to isolate tetrahydrocannabinol (THC),
                  the psychoactive compound in cannabis, leading to thousands of
                  clinical studies worldwide on the medical potential of hemp
                  and cannabis.
                </p>
                <p>
                  The healing legacy of cannabis dates back to 2737 B.C., when
                  Emperor Shen Neng of China prescribed cannabis tea for
                  ailments such as gout, rheumatism, malaria, and memory loss.
                  Building on centuries of holistic practice and modern clinical
                  research, Rosa and Mary CBD is dedicated to offering the
                  highest quality cannabinoid products.
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

      <section className="product_section">
        <div className="section_head">
          <img src={require("../assets/imgs/124.png")} alt="" />
          <h2>TOP PRODUCTS</h2>
        </div>
        <div className="container">
          <div className="section_header">
            <h2>Discover the Best CBD Products for Your Wellness Journey</h2>
            <p>
              Experience the power of nature with our lab-tested CBD tinctures,
              gummies, creams, and capsules designed to relax, recharge, and
              enhance your well-being.
            </p>
          </div>
          <div className="product-cards__slider">
            <div className="row">
              {checkTypeArr(products) &&
                products
                  .filter((item) => item.type === 1)
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

      {/* <div className="container my-5">
        <section className="testimonials">
          <div className="container">
            <div className="section_header">
              <h2>NEWS</h2>
            </div>
            <div className="product-cards__slider">
              <div className="row">
                {checkTypeArr(vidData) &&
                  vidData
                    .filter((it) => it.type === "news")
                    .map(
                      (item, i) =>
                        i < 3 && (
                          <div className="col-md-4" key={i}>
                            <YtIfram id={item?.urlId} />
                          </div>
                        )
                    )}
              </div>
              <div className="text-center mt-4 ">
                <Link to="/news" className="btn_style text-center">
                  READ MORE
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="testimonials">
        <div className="container">
          <div className="section_header">
            <h2>Testimonials</h2>
          </div>
          <div className="product-cards__slider">
            <div className="row">
              {checkTypeArr(vidData) &&
                vidData
                  .filter((it) => it.type === "testimonial")
                  .map(
                    (item, i) =>
                      i < 3 && (
                        <div className="col-md-4" key={i}>
                          <YtIfram id={item?.urlId} />
                        </div>
                      )
                  )}
            </div>
            <div className="text-center mt-4 ">
              <Link to="/testimonials" className="btn_style text-center">
                READ MORE
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      <section className="product_section">
        <div className="container">
          <div className="section_header">
            <h2 className="my-5">Our Partners</h2>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-md-3 col-6">
              <img src={require("../assets/partners/img1.jpeg")} alt="" />
            </div>
            <div className="col-md-3 col-6">
              <Link to="https://www.trycannago.com/" target="_blank">
                <img src={require("../assets/partners/img3.jpeg")} alt="" />
              </Link>
            </div>
            <div className="col-md-3 col-6">
              <img src={require("../assets/partners/img2.jpeg")} alt="" />
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqData={faqData} />
    </>
  );
};

export default Home;
