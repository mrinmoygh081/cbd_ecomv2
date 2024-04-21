import React from "react";
import Product from "../components/Product";
import ProductBuyNow from "../components/ProductBuyNow";

const Home = () => {
  return (
    <>
      <div className="hero">
        <img src={require("../assets/imgs/4.png")} alt="" />
      </div>
      <section className="product_section">
        <div className="section_head">
          <img src={require("../assets/imgs/1.png")} alt="" />
          <h2>PRODUCTS</h2>
        </div>
        <div className="container">
          <div className="section_header">
            <h3>CBD Products Range</h3>
            <p>
              A collection of the Finest CBD Products. Something for everyone.
            </p>
          </div>
          <div className="row">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </section>
      <section className="section_about">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12">
              <img src={require("../assets/product1.webp")} alt="" />
            </div>
            <div className="col-md-8 col-12">
              <div className="section_text">
                <h2>CBD UK – The UK’s Most Trusted CBD Hemp Oil products</h2>
                <p>
                  At CBD UK, our mission is to offer our valued customers only
                  the finest quality CBD products, at great prices. With over 7
                  years of experience in the CBD industry, we like to think that
                  our expert team has some of the most helpful knowledge when it
                  comes to helping our customers find the right product for
                  them. Our passion shows in every single one of our products,
                  which is highlighted by the number of return customers we have
                  gained over the last 7 years. Our customer product reviews say
                  it all. Everything we do at CBD UK is done to the highest
                  standard. Quality Control and Testing ensure that every
                  product is exactly as described and completely safe. All our
                  products come with a 100% Money-Back Guarantee. If you are not
                  100% happy with any of your purchases, we will refund in full
                  (terms and conditions apply). All our products are sold as a
                  “Food Supplement” under the MHRA UK Regulations.
                </p>
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
              <ProductBuyNow />
              <ProductBuyNow />
              <ProductBuyNow />
              <ProductBuyNow />
              <ProductBuyNow />
              <ProductBuyNow />
              <ProductBuyNow />
            </div>
          </div>
        </div>
      </section>

      <section className="product_section">
        <div className="section_head">
          <img src={require("../assets/imgs/124.png")} alt="" />
          <h2>FAQs</h2>
        </div>
        <div className="container">
          <div className="section_header">
            <h2>Which CBD Product is right for me?</h2>
            <p>
              Our expert guide will help you to select the correct product for
              you.
            </p>
          </div>
          <div className="row">
            <div className="col-12 col-md-3">
              <div className="pr_card">
                <img src={require("../assets/images/cbd_oil.jpeg")} alt="" />
                <div className="p-1">
                  <h2>CBD Oil</h2>
                  <p>
                    The most common way to take CBD is in the form of CBD Oil. A
                    few drops under the tongue offers an excellent absorption
                    rate through the sublingual gland and is also fast acting.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="pr_card">
                <img src={require("../assets/images/cbd_oil.jpeg")} alt="" />
                <div className="p-1">
                  <h2>CBD Oil</h2>
                  <p>
                    The most common way to take CBD is in the form of CBD Oil. A
                    few drops under the tongue offers an excellent absorption
                    rate through the sublingual gland and is also fast acting.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="pr_card">
                <img src={require("../assets/images/cbd_oil.jpeg")} alt="" />
                <div className="p-1">
                  <h2>CBD Oil</h2>
                  <p>
                    The most common way to take CBD is in the form of CBD Oil. A
                    few drops under the tongue offers an excellent absorption
                    rate through the sublingual gland and is also fast acting.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="pr_card">
                <img src={require("../assets/images/cbd_oil.jpeg")} alt="" />
                <div className="p-1">
                  <h2>CBD Oil</h2>
                  <p>
                    The most common way to take CBD is in the form of CBD Oil. A
                    few drops under the tongue offers an excellent absorption
                    rate through the sublingual gland and is also fast acting.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="pr_card">
                <img src={require("../assets/images/cbd_oil.jpeg")} alt="" />
                <div className="p-1">
                  <h2>CBD Oil</h2>
                  <p>
                    The most common way to take CBD is in the form of CBD Oil. A
                    few drops under the tongue offers an excellent absorption
                    rate through the sublingual gland and is also fast acting.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="pr_card">
                <img src={require("../assets/images/cbd_oil.jpeg")} alt="" />
                <div className="p-1">
                  <h2>CBD Oil</h2>
                  <p>
                    The most common way to take CBD is in the form of CBD Oil. A
                    few drops under the tongue offers an excellent absorption
                    rate through the sublingual gland and is also fast acting.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="pr_card">
                <img src={require("../assets/images/cbd_oil.jpeg")} alt="" />
                <div className="p-1">
                  <h2>CBD Oil</h2>
                  <p>
                    The most common way to take CBD is in the form of CBD Oil. A
                    few drops under the tongue offers an excellent absorption
                    rate through the sublingual gland and is also fast acting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
