import { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";

import LoadingView from "../components/LoadingView";
import {
  inputChange,
  inputChangePrevent,
  inputOnWheelPrevent,
} from "../Helper/smallFun";
import { useLocation, useNavigate } from "react-router-dom";
import { postAPI } from "../utils/fetchAPIs";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginHandler } from "../redux/slices/loginSlice";
import { cleanCartHandler } from "../redux/slices/cartSlice";

const ShippingAddress = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isPopup, setIsPopup] = useState(false);
  const [form, setForm] = useState({
    country: "",
    state: "",
    city: "",
    pincode: "",
    landmark: "",
    location: "",
  });
  const [loginD, setLoginD] = useState({
    phone: "",
    password: "",
  });
  const { token } = useSelector((state) => state.auth);

  const orderHandler = async () => {
    const { country, state, city, pincode } = form;
    if (!country || !state || !city || !pincode || !form?.location) {
      return toast.warn("Please check all required fields.");
    }
    console.log(token);
    if (token) {
      setIsPopup(false);
      let body = {
        address: form,
        products: location.state?.orderedProducts,
      };
      let d;
      if (location.state?.paymentMode === "online") {
        d = await postAPI("user/onlinePayment", body, token);
      } else {
        d = await postAPI("user/codorder", body, token);
      }
      if (d?.status) {
        if (location.state?.paymentMode === "online") {
          console.log("response", d);
        } else {
          navigate("/orders");
          toast.success("Your order has been placed!");
          dispatch(cleanCartHandler());
        }
      } else {
        toast.warn("Something went wrong!");
      }
    } else {
      setIsPopup(true);
    }
  };

  const loginFun = async () => {
    setIsLoading(true);
    const { phone, password } = loginD;
    if (phone === "" && password === "") {
      toast.warn("Please enter a phone number and password");
    }
    let d = await postAPI("login/user", loginD, null);
    if (d.status) {
      setIsPopup(false);
      dispatch(loginHandler(d));
    } else {
      toast.warn(d?.msg);
    }
    setIsLoading(false);
  };

  return (
    <>
      <main>
        <section className="product-cards mb-5">
          {isLoading ? (
            <LoadingView />
          ) : (
            <div className="container">
              <div className="product-cards__top">
                <h2 className="product-cards__title">Shipping Address</h2>
              </div>
              <div className="row ">
                <div className="col-12">
                  <div className="cart_right">
                    <div className="cart_item">
                      <h3>Add Your Address</h3>
                      <div className="shipping_form">
                        <div className="row">
                          <div className="col-md-4 col-12">
                            <div className="form-floating mb-3">
                              <input
                                type="text"
                                className="form-control w-100"
                                id="Location"
                                placeholder=""
                                name="location"
                                value={form?.location}
                                onChange={(e) => inputChange(e, form, setForm)}
                              />
                              <label htmlFor="Location">Street Line</label>
                            </div>
                          </div>
                          <div className="col-md-4 col-12">
                            <div className="form-floating mb-3">
                              <input
                                type="text"
                                className="form-control w-100"
                                id="city"
                                placeholder=""
                                name="city"
                                value={form?.city}
                                onChange={(e) => inputChange(e, form, setForm)}
                              />
                              <label htmlFor="city">City</label>
                            </div>
                          </div>
                          <div className="col-md-4 col-12">
                            <div className="form-floating mb-3">
                              <input
                                type="text"
                                className="form-control w-100"
                                id="state"
                                placeholder=""
                                name="state"
                                value={form?.state}
                                onChange={(e) => inputChange(e, form, setForm)}
                              />
                              <label htmlFor="state">State</label>
                            </div>
                          </div>
                          <div className="col-md-4 col-12">
                            <div className="form-floating mb-3">
                              <input
                                type="text"
                                className="form-control w-100"
                                id="country"
                                placeholder=""
                                name="country"
                                value={form?.country}
                                onChange={(e) => inputChange(e, form, setForm)}
                              />
                              <label htmlFor="country">Country</label>
                            </div>
                          </div>
                          <div className="col-md-4 col-12">
                            <div className="form-floating mb-3">
                              <input
                                type="text"
                                className="form-control w-100"
                                id="pincode"
                                placeholder=""
                                name="pincode"
                                value={form?.pincode}
                                onChange={(e) => inputChange(e, form, setForm)}
                              />
                              <label htmlFor="pincode">Pincode</label>
                            </div>
                          </div>
                          <div className="col-md-4 col-12">
                            <div className="form-floating mb-3">
                              <input
                                type="text"
                                className="form-control w-100"
                                id="landmark"
                                placeholder=""
                                name="landmark"
                                value={form?.landmark}
                                onChange={(e) => inputChange(e, form, setForm)}
                              />
                              <label htmlFor="landmark">Landmark</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        className="btn-reset product-card__btn"
                        onClick={orderHandler}
                      >
                        ORDER NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
      {isPopup && (
        <section className="popupsection">
          <div className="popup">
            <div className="popup_header">
              <h3>Login</h3>
              <RxCross1 onClick={() => setIsPopup(false)} />
            </div>
            <form onSubmit={loginFun} className="w-100">
              <div className="form-floating mb-3 w-100">
                <input
                  type="number"
                  name="phone"
                  className="form-control"
                  id="phone"
                  placeholder=""
                  value={form?.phone}
                  onChange={(e) => inputChange(e, loginD, setLoginD)}
                  onWheel={inputOnWheelPrevent}
                  onKeyDown={inputChangePrevent}
                />
                <label htmlFor="phone">Phone</label>
              </div>
              <div className="form-floating mb-3 w-100">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="pw"
                  placeholder="Password"
                  autoComplete="off"
                  value={form?.password}
                  onChange={(e) => inputChange(e, loginD, setLoginD)}
                />
                <label htmlFor="pw">Password</label>
              </div>
              <button className="login-ahref" onClick={loginFun} type="button">
                Login
              </button>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default ShippingAddress;
