import React from "react";
import ProductBuyNow from "../components/ProductBuyNow";
import { Link } from "react-router-dom";
import { FiPlusCircle } from "react-icons/fi";

const Products = () => {
  return (
    <>
      <section className="product_section">
        <div className="section_head">
          <img src={require("../assets/imgs/124r.png")} alt="" />
          <h2 style={{ transform: "translate(-50%, -10%)" }}>PRODUCTS</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-12">
              <div className="d-md-block d-none cat_choice">
                <div className="p_category">
                  <h3>All Categories</h3>
                  <ul>
                    <li>
                      <div className="cat_choice_list">
                        <Link to={"/"}>CBD OILS</Link>
                        <FiPlusCircle />
                      </div>
                      <ul className="subdrop">
                        <li>
                          <Link to={"/"}>Natural Flavour CBD Oil</Link>
                        </li>
                        <li>
                          <Link to={"/"}>Natural Flavour CBD Oil</Link>
                        </li>
                        <li>
                          <Link to={"/"}>Natural Flavour CBD Oil</Link>
                        </li>
                        <li>
                          <Link to={"/"}>Natural Flavour CBD Oil</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="cat_choice_list">
                        <Link to={"/"}>CBD CAPSULES</Link>
                        <FiPlusCircle />
                      </div>
                    </li>
                    <li>
                      <div className="cat_choice_list">
                        <Link to={"/"}>CBD CREAM</Link>
                        <FiPlusCircle />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-9 col-12">
              <div className="section_header">
                <h2>This Week's Special Offers</h2>
                <p>
                  These CBD SALE items offer BIG Discounts on some Amazing
                  products.
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
