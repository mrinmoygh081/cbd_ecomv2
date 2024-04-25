import React from "react";
import ProductBuyNow from "../components/ProductBuyNow";

const Wishlists = () => {
  return (
    <>
      <section className="product_section">
        <div className="section_head">
          <img src={require("../assets/imgs/124r.png")} alt="" />
          <h2 style={{ transform: "translate(-50%, -10%)" }}>WISHLIST</h2>
        </div>
        <div className="container">
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
    </>
  );
};

export default Wishlists;
