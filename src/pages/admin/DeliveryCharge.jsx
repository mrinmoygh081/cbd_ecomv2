import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Fragment, useEffect, useState } from "react";
import {
  apiCallBack,
  deleteAPI,
  getAPI,
  postAPI,
  putAPI,
} from "../../utils/fetchAPIs";
import { toast } from "react-toastify";
import { inputChange, reConfirm } from "../../Helper/smallFun";
import HeaderAdmin from "../../components/HeaderAdmin";
import { FaSearch } from "react-icons/fa";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { formatDate } from "../../utils/dateTimeFormat";

export const DeliveryCharge = () => {
  const { token } = useSelector((state) => state.auth);
  const [data, setData] = useState(null);
  const [editForm, setEditForm] = useState({
    d_id: "",
    amount: "",
  });

  const getCategories = async () => {
    const d = await getAPI("admin/delevery", token);
    if (d?.status) {
      setData(d?.data);
    } else {
      toast.warning("Please check your internet connection!");
    }
  };

  const editIcon = (item) => {
    let temp = { ...item };
    temp.d_id = item.deliveryChargeId.toString();
    setEditForm(temp);
  };

  useEffect(() => {
    getCategories();
  }, [token]);

  const updateBtn = async () => {
    if (editForm?.amount !== "") {
      const data = await putAPI(
        `admin/delevery/${editForm?.d_id}`,
        editForm,
        token
      );
      if (data?.status) {
        toast.success("Delivery amount is updated succesfully");
        await getCategories();
        setEditForm({
          d_id: "",
          amount: "",
        });
      } else {
        toast.error("Product data is not updated. Try Again!");
      }
    } else {
      toast.error("Please fill all the fields");
    }
  };

  return (
    <div className="fixed-nav sticky-footer bg-dark" id="page-top">
      <HeaderAdmin />
      <div className="content-wrapper">
        <div className="container-fluid">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/admin">Dashboard</Link>
            </li>
            <li className="breadcrumb-item active">Delivery</li>
          </ol>

          <div className="card mb-3 overflow">
            <div className="card-header"></div>
            <div className="card-body mb-5">
              <div className="row">
                <div className="col-md-6">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead className="text-center">
                        <tr>
                          <th>ID</th>
                          <th>Amount</th>
                          {/* <th>DateTime</th> */}
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th>ID</th>
                          <th>Amount</th>
                          {/* <th>DateTime</th> */}
                          <th>Action</th>
                        </tr>
                      </tfoot>
                      <tbody className="text-center">
                        {data &&
                          data.map((item, i) => (
                            <Fragment key={i}>
                              <tr>
                                <td>{item?.deliveryChargeId}</td>
                                <td>{item?.amount}</td>
                                {/* <td>
                                  {item?.created_at &&
                                    formatDate(item?.created_at)}
                                </td> */}
                                <td>
                                  <button
                                    type="button"
                                    className="btn btn-primary me-2"
                                    onClick={() => editIcon(item)}
                                  >
                                    <FaPencil />
                                  </button>
                                </td>
                              </tr>
                            </Fragment>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-md-6">
                  {editForm?.d_id !== "" && (
                    <div className="screen_header shadow">
                      <h3>Edit Delivery Charge</h3>

                      <div className="form-floating mb-3 pt-2 w-100">
                        <input
                          type="text"
                          name="amount"
                          className="form-control"
                          id="floatingInput"
                          placeholder=""
                          value={editForm?.amount}
                          onChange={(e) =>
                            inputChange(e, editForm, setEditForm)
                          }
                        />
                        <label htmlFor="floatingInput">Delivery Charge</label>
                      </div>

                      <div className="text-start py-3">
                        <button
                          onClick={updateBtn}
                          className="btn fw-bold btn-primary"
                        >
                          UPDATE
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
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
