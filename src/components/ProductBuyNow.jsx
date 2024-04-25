import React from "react";
import { Link } from "react-router-dom";
import { FaCartShopping, FaRegHeart } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addCartHandler } from "../redux/slices/cartSlice";

const ProductBuyNow = ({ p_id, name, price, image, item }) => {
  const dispatch = useDispatch();
  console.log("item", item);
  return (
    <>
      <div className="col-12 col-md-4">
        {/* <Link to={`/product/${p_id}`}> */}
        <article className="product-card">
          <div className="product-card__top">
            <div className="product-card__image product-card__image--large">
              <Link to={`/product/${p_id}`}>
                <img
                  src={`${process.env.REACT_APP_BACKEND_URL}${image}`}
                  alt={""}
                  className="product-card_img"
                  width="100%"
                  height="440px"
                />
              </Link>
            </div>
          </div>
          <div className="product-card__info">
            <h3 className="product-card__title">
              <Link to={`/product/${p_id}`}>{name}</Link>
            </h3>
            <div className="product-card__price price">
              <span className="price__current price__current--small">
                ${price}
              </span>
            </div>
          </div>
          <div className="product-card__props">
            <button
              className="btn-reset product-card__btn"
              onClick={() => dispatch(addCartHandler(item))}
            >
              <FaCartShopping />
              Add to cart
            </button>
            <button className="wishlist__btn">
              <FaRegHeart />
            </button>
          </div>
        </article>
        {/* </Link> */}
      </div>
    </>
  );
};

export default ProductBuyNow;
