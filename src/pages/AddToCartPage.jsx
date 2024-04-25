import { useEffect, useState } from "react";
import LoadingView from "../components/LoadingView";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQty, increaseQty } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddToCartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let backUrl = process.env.REACT_APP_BACKEND_URL;
  // const [isLoading, setIsLoading] = useState(false);
  const cartItems = useSelector((state) => state.cart);
  const [orderedProducts, setOrderedProducts] = useState([]);

  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      let d = cartItems.map((item) => {
        return { id: item.product_id, quantity: item.qty };
      });
      setOrderedProducts(d);
    }
  }, [cartItems]);

  const cartHandler = () => {
    if (orderedProducts && orderedProducts.length > 0) {
      navigate("/shipping", { state: { orderedProducts: orderedProducts } });
    } else {
      toast.warn("Please add atleast one product to your cart!");
    }
  };

  return (
    <>
      <main>
        <section className="product-cards mb-5">
          {false ? (
            <LoadingView />
          ) : (
            <div className="container">
              <div className="product-cards__top">
                <h2 className="product-cards__title">Cart</h2>
              </div>
              <div className="row">
                <div className="col-md-8 col-12">
                  <div className="cart_card">
                    {cartItems &&
                      cartItems.length > 0 &&
                      cartItems.map((item, i) => (
                        <div className="cart_item" key={i}>
                          {console.log(item)}
                          <img
                            src={`${backUrl + item?.image}`}
                            alt=""
                            width={"100px"}
                          />
                          <h4 className="cart_item_name">{item?.name}</h4>
                          <div className="quantity">
                            <button
                              className="qty_minus"
                              onClick={() => dispatch(decreaseQty(item))}
                            >
                              -
                            </button>
                            <input
                              type="text"
                              value={item?.qty}
                              className="form-control"
                              disabled
                            />
                            <button
                              className="qty_plus"
                              onClick={() => dispatch(increaseQty(item, 1))}
                            >
                              +
                            </button>
                          </div>
                          <div className="cart_price"> ${item.price}</div>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="col-md-4 col-12">
                  <div className="cart_right">
                    <div className="cart_item">
                      <h3>Summary</h3>
                      <p>
                        Subtotal: <b>$14000</b>
                      </p>
                      <p>
                        Delivery Charge: <b>$14000</b>
                      </p>
                      <p>
                        Total amount to be paid: <b>$14000</b>
                      </p>
                      <div className="payment_mode py-3">
                        <h4>Payment Mode:</h4>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            checked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            Cash On Delivery
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                          >
                            Online
                          </label>
                        </div>
                      </div>

                      <button
                        className="btn-reset product-card__btn"
                        onClick={cartHandler}
                      >
                        ADD SHIPPING
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default AddToCartPage;
