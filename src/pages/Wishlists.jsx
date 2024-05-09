import React from "react";
import ProductBuyNow from "../components/ProductBuyNow";
import { useSelector } from "react-redux";

const Wishlists = () => {
  const cartItems = useSelector((state) => state.wishlist);

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
              {cartItems &&
                cartItems.map((item, i) => {
                  let { product_id, name, price, image } = item;
                  return (
                    <ProductBuyNow
                      p_id={product_id}
                      name={name}
                      price={price}
                      image={image}
                      item={item}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wishlists;
