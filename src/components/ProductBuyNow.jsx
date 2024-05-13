import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCartShopping, FaRegHeart, FaTrash } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addCartHandler } from "../redux/slices/cartSlice";
import {
  addWishListHandler,
  removeWishListHandler,
} from "../redux/slices/wishlistSlice";

const ProductBuyNow = ({ p_id, name, price, image, item }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  console.log(item);

  return (
    <>
      <div className="col-12 col-md-4">
        {/* <Link to={`/product/${p_id}`}> */}
        <article
          className={
            item?.quantity <= 0 ? "product-card deactive" : "product-card"
          }
        >
          {item?.quantity <= 0 && <div className="out_label">OUT OF STOCK</div>}
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
            {item?.quantity >= 0 && (
              <button
                className="btn-reset product-card__btn"
                onClick={() => dispatch(addCartHandler(item))}
              >
                <FaCartShopping />
                Add to cart
              </button>
            )}
            {pathname !== "/wishlist" ? (
              <button
                className="wishlist__btn"
                onClick={() => dispatch(addWishListHandler(item))}
              >
                <FaRegHeart />
              </button>
            ) : (
              <button
                className="wishlist__btn"
                onClick={() => dispatch(removeWishListHandler(p_id))}
              >
                <FaTrash />
              </button>
            )}
          </div>
        </article>
        {/* </Link> */}
      </div>
    </>
  );
};

export default ProductBuyNow;
