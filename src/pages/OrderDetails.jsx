import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiCallBack } from "../utils/fetchAPIs";
import { useSelector } from "react-redux";
import { formatDate } from "../utils/dateTimeFormat";
import { checkTypeArr } from "../Helper/smallFun";

const OrderDetails = () => {
  const { token } = useSelector((state) => state.auth);
  const [data, setData] = useState(null);
  const [track, setTrack] = useState(null);
  const { id } = useParams();
  const getData = async () => {
    const d = await apiCallBack("GET", `user/orders/${id}`, null, token);
    if (d?.status && d?.data) {
      setData(d?.data);
      if (d?.data?.shipment_details?.track_data) {
        setTrack(JSON.parse(d?.data?.shipment_details?.track_data));
      }
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="order_details_card">
              <h2>Order Summary</h2>
              <div className="row">
                {checkTypeArr(data?.products) &&
                  data.products.map((item, index) => (
                    <Fragment key={index}>
                      <div className="col-md-6 col-12">
                        <div className="order_product_list ">
                          <h4>{item?.name}</h4>
                          <p>
                            Price{" "}
                            <i>
                              $
                              {item?.price &&
                                parseFloat(item?.price).toFixed(2)}
                            </i>
                          </p>
                          <p>
                            Quantity: <b>{item?.quantity}</b>
                          </p>
                          <p>
                            Subtotal Price:{" "}
                            <i>
                              $
                              {item?.totaPrice &&
                                parseFloat(item?.totaPrice).toFixed(2)}
                            </i>
                          </p>
                        </div>
                      </div>
                    </Fragment>
                  ))}
              </div>
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div className="row">
              <div className="col-12">
                <div className="order_product_list">
                  <h4>Order ID: {data?.orderInfo?.orderId}</h4>
                  <p>
                    Price{" "}
                    <b>
                      $
                      {data?.orderInfo?.price &&
                        parseFloat(data?.orderInfo?.price).toFixed(2)}
                    </b>
                  </p>
                  <p>
                    Delivery Charge: <b>${data?.orderInfo?.delivery}</b>
                  </p>
                  <p>
                    Total Price:{" "}
                    <b>
                      $
                      {data?.orderInfo?.totalPrice &&
                        parseFloat(data?.orderInfo?.totalPrice).toFixed(2)}{" "}
                      (
                      {data?.orderInfo?.paymentMode === "COD"
                        ? "Cash On Delivery"
                        : data?.orderInfo?.paymentMode}
                      )
                    </b>
                  </p>
                  <p>
                    Purchase Date:{" "}
                    <span>
                      {data?.orderInfo?.createdAt &&
                        formatDate(data?.orderInfo?.createdAt)}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div className="row">
              <div className="col-12">
                <div className="order_product_list">
                  <h4>Delivery Address</h4>
                  <p>
                    <span>
                      {data?.address?.location}, {data?.address?.city},{" "}
                      {data?.address?.state}, {data?.address?.country},{" "}
                      {data?.address?.pincode}
                    </span>
                  </p>
                  <p>{data?.address?.landmark}</p>
                </div>
              </div>
            </div>
          </div>
          {track && (
            <div className="col-md-3 col-12 py-2">
              <div className="row">
                <div className="col-12">
                  <div className="order_product_list">
                    <h4>Order Track</h4>
                    <p>
                      Tracking Number:{" "}
                      <b>
                        {track?.output?.completeTrackResults[0]?.trackingNumber}
                      </b>
                    </p>
                    <p>
                      Pickup Date:{" "}
                      <b>
                        {checkTypeArr(
                          track?.output?.completeTrackResults[0]
                            ?.trackResults[0]?.dateAndTimes
                        )
                          ? track?.output?.completeTrackResults[0]?.trackResults[0]?.dateAndTimes.map(
                              (item, i) => {
                                let res;
                                if (item?.type === "ACTUAL_PICKUP") {
                                  res = formatDate(item?.dateTime);
                                }
                                return res;
                              }
                            )
                          : "WAITING FOR UPDATE!"}
                      </b>
                    </p>
                    <p>
                      Shipping Date:{" "}
                      <b>
                        {checkTypeArr(
                          track?.output?.completeTrackResults[0]
                            ?.trackResults[0]?.dateAndTimes
                        )
                          ? track?.output?.completeTrackResults[0]?.trackResults[0]?.dateAndTimes.map(
                              (item, i) => {
                                let res;
                                if (item?.type === "SHIP") {
                                  res = formatDate(item?.dateTime);
                                }
                                return res;
                              }
                            )
                          : "WAITING FOR UPDATE!"}
                      </b>
                    </p>
                    <p>
                      Delivery Date:{" "}
                      <b>
                        {checkTypeArr(
                          track?.output?.completeTrackResults[0]
                            ?.trackResults[0]?.dateAndTimes
                        )
                          ? track?.output?.completeTrackResults[0]?.trackResults[0]?.dateAndTimes.map(
                              (item, i) => {
                                let res;
                                if (item?.type === "ACTUAL_DELIVERY") {
                                  res = formatDate(item?.dateTime);
                                }
                                return res;
                              }
                            )
                          : "WAITING FOR UPDATE!"}
                      </b>
                    </p>
                    <p>
                      Delivery Status: <b>{data?.shipment_details?.status}</b>
                    </p>
                    <p>
                      Track Your Delivery:{" "}
                      <a
                        href="https://www.fedex.com/en-in/tracking.html"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary"
                      >
                        CLICK HERE
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
