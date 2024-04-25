import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect, useState } from "react";
import { deleteAPI, postAPI } from "../../utils/fetchAPIs";
import { toast } from "react-toastify";
import { reConfirm } from "../../Helper/smallFun";
import { logoutHandler } from "../../redux/slices/loginSlice";
import HeaderAdmin from "../../components/HeaderAdmin";
import { FaTrash } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

export const AdminOrders = () => {
  const { token } = useSelector((state) => state.auth);
  const [data, setData] = useState(null);
  let backUrl = process.env.REACT_APP_BACKEND_URL;
  const dispatch = useDispatch();

  const getOrders = async () => {
    let body = {
      take: 100,
      skip: 0,
    };
    const d = await postAPI("admin/getProduct", body, token);
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

  //   const deleteProductHandler = async (id) => {
  //     const d = await deleteAPI(`admin/product/${id}`, token);
  //     if (d?.status) {
  //       toast.success("The Order deleted successfully");
  //       getOrders();
  //     } else {
  //       toast.warn(d?.msg);
  //     }
  //   };

  return (
    <div className="fixed-nav sticky-footer bg-dark" id="page-top">
      <HeaderAdmin />
      <div className="content-wrapper">
        <div className="container-fluid">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/admin">Dashboard</Link>
            </li>
            <li className="breadcrumb-item active">Products</li>
          </ol>

          <div className="card mb-3 overflow">
            <div className="card-header">
              <Link to={"/admin/products/add"} className="btn btn-primary">
                Add New &nbsp; <i className="fa fa-plus" aria-hidden="true"></i>
              </Link>
              <form className="form-inline my-2 my-lg-0 mr-lg-2">
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search for..."
                  />
                  <span className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <FaSearch />
                    </button>
                  </span>
                </div>
              </form>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table
                  className="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellSpacing="0"
                >
                  <thead className="text-center">
                    <tr>
                      <th>Name</th>
                      <th>Image</th>
                      <th>Description</th>
                      <th>Price</th>
                      <th>Brand</th>
                      <th>Quantity</th>
                      <th>Rating</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Name</th>
                      <th>Image</th>
                      <th>Description</th>
                      <th>Price</th>
                      <th>Brand</th>
                      <th>Quantity</th>
                      <th>Rating</th>
                      <th>Action</th>
                    </tr>
                  </tfoot>
                  <tbody className="text-center">
                    {data &&
                      data.map((item, i) => (
                        <Fragment key={i}>
                          <tr>
                            <td>{item?.name}</td>
                            <td className="max_200">
                              <img
                                src={`${backUrl + item?.image}`}
                                alt={item?.name}
                                className="w-100"
                              />
                            </td>
                            <td>{item?.description}</td>
                            <td>{item?.price}</td>
                            <td>{item?.brand}</td>
                            <td>{item?.quantity}</td>
                            <td>{item?.rating}</td>
                            <td>
                              {/* <button
                                type="button"
                                className="btn btn-success me-2"
                              >
                                <i className="fa fa-pencil"></i>
                              </button>
                              <button
                                type="button"
                                className="btn btn-success me-2"
                              >
                                <i className="fa fa-pencil"></i>
                              </button> */}
                              {/* <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() =>
                                  reConfirm(
                                    item?.product_id,
                                    deleteProductHandler,
                                    `You're deleting ${item?.name} permanently.`
                                  )
                                }
                              >
                                <FaTrash />
                              </button> */}
                            </td>
                          </tr>
                        </Fragment>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-footer small text-muted">
              Updated yesterday at 11:59 PM
            </div>
          </div>
        </div>

        <footer className="sticky-footer">
          <div className="container">
            <div className="text-center">
              <small>Copyright © Digipro Design</small>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
