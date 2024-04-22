import { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";

import LoadingView from "../components/LoadingView";
import {
  inputChange,
  inputChangePrevent,
  inputOnWheelPrevent,
} from "../Helper/smallFun";
import { useLocation } from "react-router-dom";
import { postAPI } from "../utils/fetchAPIs";
import { toast } from "react-toastify";

const ShippingAddress = () => {
  //   const dispatch = useDispatch();
  const location = useLocation();
  //   let backUrl = process.env.REACT_APP_BACKEND_URL;
  const [isLoading, setIsLoading] = useState(false);
  //   const cartItems = useSelector((state) => state.cart);
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
  const [userToken, setUserToken] = useState(null);

  const orderHandler = async () => {
    if (userToken) {
      setIsPopup(false);
      let body = {
        address: form,
        products: location.state?.orderedProducts,
      };
      console.log(body);
      let d = postAPI("user/codorder", body, userToken);
      if (d.status) {
        toast.success("Your order has been placed!");
      } else {
        toast.success("Your order has been placed!");
      }
    } else {
      setIsPopup(true);
    }
  };

  const loginFun = async () => {
    const { phone, password } = loginD;
    if (phone === "" && password === "") {
      toast.warn("Please enter a phone number and password");
    }
    let d = await postAPI("login/user", loginD, null);
    if (d.status) {
      const { token } = d;
      setUserToken(token);
      setIsPopup(false);
    }
  };

  useEffect(() => {}, []);

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
              <div className="row justify-content-center">
                <div className="col-md-4 col-12">
                  <div className="cart_right">
                    <div className="cart_item">
                      <h3>Add Your Address</h3>

                      <div className="shipping_form">
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control w-100"
                            id="floatingInput"
                            placeholder=""
                            name="location"
                            value={form?.location}
                            onChange={(e) => inputChange(e, form, setForm)}
                          />
                          <label htmlFor="floatingInput">Location</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control w-100"
                            id="floatingInput"
                            placeholder=""
                            name="city"
                            value={form?.city}
                            onChange={(e) => inputChange(e, form, setForm)}
                          />
                          <label htmlFor="floatingInput">City</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control w-100"
                            id="floatingInput"
                            placeholder=""
                            name="state"
                            value={form?.state}
                            onChange={(e) => inputChange(e, form, setForm)}
                          />
                          <label htmlFor="floatingInput">State</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control w-100"
                            id="floatingInput"
                            placeholder=""
                            name="country"
                            value={form?.country}
                            onChange={(e) => inputChange(e, form, setForm)}
                          />
                          <label htmlFor="floatingInput">Country</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control w-100"
                            id="floatingInput"
                            placeholder=""
                            name="pincode"
                            value={form?.pincode}
                            onChange={(e) => inputChange(e, form, setForm)}
                          />
                          <label htmlFor="floatingInput">Pincode</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control w-100"
                            id="floatingInput"
                            placeholder=""
                            name="landmark"
                            value={form?.landmark}
                            onChange={(e) => inputChange(e, form, setForm)}
                          />
                          <label htmlFor="floatingInput">Landmark</label>
                        </div>
                      </div>
                      <button
                        className="btn-reset product-card__btn"
                        onClick={orderHandler}
                      >
                        Purchase Now
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
        <div className="popup">
          <div className="popup_header">
            <h3>Login</h3>
            <RxCross1 />
          </div>
          <form onSubmit={loginFun} className="w-100">
            <div className="form-floating mb-3 w-100">
              <input
                type="number"
                name="phone"
                className="form-control"
                id="floatingInput"
                placeholder=""
                value={form?.phone}
                onChange={(e) => inputChange(e, loginD, setLoginD)}
                onWheel={inputOnWheelPrevent}
                onKeyDown={inputChangePrevent}
              />
              <label htmlFor="floatingInput">Phone</label>
            </div>
            <div className="form-floating mb-3 w-100">
              <input
                type="password"
                name="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={form?.password}
                onChange={(e) => inputChange(e, loginD, setLoginD)}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button className="login-ahref" onClick={loginFun} type="button">
              Login
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ShippingAddress;
