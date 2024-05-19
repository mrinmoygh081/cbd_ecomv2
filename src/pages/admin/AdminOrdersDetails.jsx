import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { apiCallBack } from "../../utils/fetchAPIs";
import { logoutHandler } from "../../redux/slices/loginSlice";
import HeaderAdmin from "../../components/HeaderAdmin";
import { formatDateTime } from "../../utils/dateTimeFormat";

export const AdminOrdersDetails = () => {
  const { id } = useParams();
  const { token } = useSelector((state) => state.auth);
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getOrders = async () => {
    let body = {
      take: 100,
      skip: 0,
    };
    const d = await apiCallBack("GET", `admin/orders/${id}`, body, token);
    if (d === "logout") {
      window.location.replace("/admin");
      dispatch(logoutHandler());
    }
    if (d?.status) {
      setData(d?.data);
    }
  };

  useEffect(() => {
    getOrders();
  }, [token]);

  return (
    <div className="fixed-nav sticky-footer bg-dark" id="page-top">
      <HeaderAdmin />
      <div className="content-wrapper">
        <div className="container-fluid">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/admin">Dashboard</Link>
            </li>
            <li className="breadcrumb-item active">Orders</li>
          </ol>

          <div className="card mb-3 overflow">
            <div className="card-header"></div>
            <div className="card-body">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="admin_order_card">
                      <h3>Order Info</h3>
                      <div className="table-responsive">
                        <table className="table table-bordered table-striped">
                          <tbody>
                            <tr>
                              <th>ORDER ID</th>
                              <td>{data?.orderInfo?.orderId}</td>
                            </tr>
                            <tr>
                              <th>Price</th>
                              <td>
                                $
                                {data?.orderInfo?.price &&
                                  parseFloat(data?.orderInfo?.price).toFixed(2)}
                              </td>
                            </tr>
                            <tr>
                              <th>Delivery Charge</th>
                              <td>
                                $
                                {data?.orderInfo?.delivery &&
                                  parseFloat(data?.orderInfo?.delivery).toFixed(
                                    2
                                  )}
                              </td>
                            </tr>
                            <tr>
                              <th>Total Price</th>
                              <td>
                                $
                                {data?.orderInfo?.totalPrice &&
                                  parseFloat(
                                    data?.orderInfo?.totalPrice
                                  ).toFixed(2)}
                              </td>
                            </tr>
                            <tr>
                              <th>Purchase Date and Time</th>
                              <td>
                                {data?.orderInfo?.createdAt &&
                                  formatDateTime(data?.orderInfo?.createdAt)}
                              </td>
                            </tr>
                            <tr>
                              <th>Mode Of Payment</th>
                              <td>
                                {data?.orderInfo?.paymentMode === "COD"
                                  ? "CASH ON DELIVERY"
                                  : data?.orderInfo?.paymentMode}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="admin_order_card">
                      <h3>Shipping Address</h3>
                      <div className="table-responsive">
                        <table className="table table-bordered table-striped">
                          <tbody>
                            <tr>
                              <th>Street Address</th>
                              <td>{data?.address?.location}</td>
                            </tr>
                            <tr>
                              <th>Landmark</th>
                              <td>{data?.address?.landmark}</td>
                            </tr>
                            <tr>
                              <th>City</th>
                              <td>{data?.address?.city}</td>
                            </tr>
                            <tr>
                              <th>State</th>
                              <td>{data?.address?.state}</td>
                            </tr>
                            <tr>
                              <th>Zip Code</th>
                              <td>{data?.address?.pincode}</td>
                            </tr>
                            <tr>
                              <th>Country</th>
                              <td>{data?.address?.country}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="admin_order_card">
                      <h3>Purchased Products List</h3>
                      <div className="row">
                        {data?.products &&
                          data?.products.map((item, i) => (
                            <div className="col-md-6 col-12">
                              <div className="table-responsive">
                                <table className="table table-bordered table-striped">
                                  <tbody>
                                    <tr>
                                      <th>Product Name</th>
                                      <td>{item?.name}</td>
                                    </tr>
                                    <tr>
                                      <th>Price</th>
                                      <td>
                                        $
                                        {item?.price &&
                                          parseFloat(item?.price).toFixed(2)}
                                      </td>
                                    </tr>
                                    <tr>
                                      <th>Quantity</th>
                                      <td>{item?.quantity}</td>
                                    </tr>
                                    <tr>
                                      <th>Total Price</th>
                                      <td>
                                        $
                                        {item?.totaPrice &&
                                          parseFloat(item?.totaPrice).toFixed(
                                            2
                                          )}
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="admin_order_card">
                      <h3>Shipment Details</h3>
                      {data?.shipment_details ? (
                        <>
                          <div className="table-responsive">
                            <table className="table table-bordered table-striped">
                              <tbody>
                                <tr>
                                  <th>Tracking ID</th>
                                  <td>{data?.shipment_details?.traking_id}</td>
                                </tr>
                                <tr>
                                  <th>Status</th>
                                  <td>{data?.shipment_details?.status}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </>
                      ) : (
                        <>
                          <button
                            className="btn btn-primary"
                            onClick={() =>
                              navigate("/admin/shipment", { state: data })
                            }
                          >
                            ADD SHIPMENT
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer small text-muted"></div>
          </div>
        </div>

        <footer className="sticky-footer">
          <div className="container">
            <div className="text-center">
              <small>Copyright © 2024 </small>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
