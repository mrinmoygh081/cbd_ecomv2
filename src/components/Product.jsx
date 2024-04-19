import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <>
      <div className="col-12 col-md-3">
        <div className="p_img">
          <Link to={"/"}>
            <img src={require("../assets/products.jpg")} alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Product;
