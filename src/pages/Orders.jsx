import React, { useEffect, useState } from "react";
import { apiCallBack } from "../utils/fetchAPIs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Orders = () => {
  const { token } = useSelector((state) => state.auth);
  const [data, setData] = useState(null);

  const getOrderList = async () => {
    console.log(token);
    const d = await apiCallBack("GET", "user/orders", null, token);
    if (d?.status) {
      setData(d?.data);
    }
  };

  useEffect(() => {
    getOrderList();
  }, []);

  return (
    <div>
      <div className="container orders_list">
        <div className="section_head">
          <h1>My Orders</h1>
        </div>
        <div className="row">
          {data &&
            data.map((item, i) => (
              <div className="col-12" key={i}>
                <div className="order_card">
                  <div className="row">
                    <div className="col-md-3 col-12">
                      <img
                        src={`${process.env.REACT_APP_BACKEND_URL}${item?.image}`}
                        alt={""}
                        className="product-card_img"
                      />
                    </div>
                    <div className="col-md-9 col-12">
                      <div>
                        <Link to={`/order-details/${item?.image}`}>
                          <h3>{item?.name}</h3>
                          <p>
                            Order Date:{" "}
                            {item?.created_at &&
                              new Date(item?.created_at).toLocaleDateString()}
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
