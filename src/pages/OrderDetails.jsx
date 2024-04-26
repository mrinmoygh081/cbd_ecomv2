import React, { useEffect, useState } from "react";
import { FaCartShopping, FaRegHeart } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { apiCallBack } from "../utils/fetchAPIs";
import StarRatings from "../components/StarRatings";
import { addCartHandler } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const OrderDetails = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const { id } = useParams();
  const getData = async () => {
    let obj = {
      productId: id,
    };
    const d = await apiCallBack("POST", "user/product", obj, null);
    if (d?.status && d?.data.length > 0) {
      setData(d?.data[0]);
    }
  };
  console.log(data);

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 col-12">
            <img
              src={`${process.env.REACT_APP_BACKEND_URL}${data?.image}`}
              alt={""}
              className="product-card_img"
            />
          </div>
          <div className="col-md-8 col-12">
            <div className="p_details">
              <h2>
                {data?.name} | {data?.brand}
              </h2>
              <h3>DESCRIPTION</h3>
              <p>{data?.description}</p>
              <h3>GUIDELINE</h3>
              <p>{data?.guideline}</p>
              <div className="ratings">
                <StarRatings rating={data?.rating} />
                {/* <FaRegStar className="star" />
                {data?.rating}
                <IoIosStar /> */}
              </div>
              <div className="product-card__info">
                <div className="product-card__price price">
                  <span className="price__current price__current--small">
                    ${data?.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
