import React from "react";
import { Link } from "react-router-dom";

const Product = ({ id, name, image }) => {
  return (
    <>
      <div className="col-12 col-md-3">
        <div className="p_img">
          <Link to={`/products?cat_id=${id}`}>
            <img src={`${process.env.REACT_APP_BACKEND_URL}${image}`} alt="" />
            <h3>{name}</h3>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Product;
