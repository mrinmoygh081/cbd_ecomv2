import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiCallBack } from "../utils/fetchAPIs";
import { useSelector } from "react-redux";

const OrderDetails = () => {
  const { token } = useSelector((state) => state.auth);
  const [data, setData] = useState(null);
  const { id } = useParams();
  const getData = async () => {
    const d = await apiCallBack("POST", `user/orders/${id}`, null, token);
    if (d?.status && d?.data.length > 0) {
      setData(d?.data[0]);
    }
  };
  console.log("data", data);

  useEffect(() => {
    getData();
  }, [id]);

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
