import { useEffect, useState } from "react";
import LoadingView from "../components/LoadingView";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQty,
  increaseQty,
  removeCartHandler,
} from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { MdDeleteOutline } from "react-icons/md";

const AddToCartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let backUrl = process.env.REACT_APP_BACKEND_URL;
  // const [isLoading, setIsLoading] = useState(false);
  const cartItems = useSelector((state) => state.cart);
  const [orderedProducts, setOrderedProducts] = useState([]);
  const [price, setPrice] = useState({
    subTotal: 0,
    total: 0,
    delivery: 34,
  });

  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      let subTotal = 0;
      let d = cartItems.map((item) => {
        if (typeof item?.price === "number") {
          subTotal += parseFloat(item?.price.toFixed(2));
        } else {
          subTotal = "";
        }
        return { id: item.product_id, quantity: item.qty };
      });
      let total = 0;
      let delivery = 34;
      if (subTotal) {
        total = parseFloat(subTotal.toFixed(2)) + delivery;
      } else {
        total = "";
      }
      setOrderedProducts(d);
      setPrice({ ...price, subTotal, total });
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
                          <img
                            src={`${backUrl + item?.image}`}
                            alt=""
                            width={"100px"}
                          />
                          <h4 className="cart_item_name">{item?.name}</h4>
                          <div className="quantity">
                            {item?.qty > 1 ? (
                              <button
                                className="qty_minus"
                                onClick={() => dispatch(decreaseQty(item))}
                              >
                                -
                              </button>
                            ) : (
                              <button
                                className="qty_minus"
                                onClick={() =>
                                  dispatch(removeCartHandler(item?.product_id))
                                }
                              >
                                <MdDeleteOutline />
                              </button>
                            )}

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
                        Subtotal: <b>${price?.subTotal}</b>
                      </p>
                      <p>
                        Delivery Charge: <b>${price?.delivery}</b>
                      </p>
                      <p>
                        Total amount to be paid: <b>${price?.total}</b>
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
