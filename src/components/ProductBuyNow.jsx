import React from "react";
import { Link } from "react-router-dom";
import { FaCartShopping, FaRegHeart } from "react-icons/fa6";

const ProductBuyNow = () => {
  return (
    <>
      <div className="col-12 col-md-3">
        <article className="product-card">
          <div className="product-card__top">
            <div className="product-card__image product-card__image--large">
              <img
                src={require("../assets/images/cbd_cream.jpeg")}
                alt={""}
                className="product-card_img"
                width="100%"
                height="440px"
              />
            </div>
          </div>
          <div className="product-card__info">
            <h3 className="product-card__title">
              <Link to="/">CBD Gummies</Link>
            </h3>
            <div className="product-card__price price">
              <span className="price__current price__current--small">$50</span>
            </div>
          </div>
          <div className="product-card__props">
            <button className="btn-reset product-card__btn">
              <FaCartShopping />
              Add to cart
            </button>
            <button className="wishlist__btn">
              <FaRegHeart />
            </button>
          </div>
        </article>
      </div>
    </>
  );
};

export default ProductBuyNow;
