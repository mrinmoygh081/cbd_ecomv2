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
import { apiCallBack } from "../utils/fetchAPIs";
import { checkTypeArr } from "../Helper/smallFun";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let backUrl = process.env.REACT_APP_BACKEND_URL;
  // const [isLoading, setIsLoading] = useState(false);
  const { cartItems } = useSelector((state) => state.cart2);
  const [orderedProducts, setOrderedProducts] = useState([]);
  const [price, setPrice] = useState({
    subTotal: "",
    total: "",
    delivery: "",
  });
  const [paymentMode, setPaymentMode] = useState("cod");

  const getDeliveryFee = async () => {
    const d = await apiCallBack("GET", "user/delivery", null, null);
    if (d?.status) {
      return d?.data;
    }
    return null;
  };

  useEffect(() => {
    (async () => {
      if (cartItems && cartItems.length > 0) {
        let subTotal = 0;
        let d = cartItems.map((item) => {
          subTotal += parseFloat(item?.price);
          return { id: item.product_id, quantity: item.qty };
        });
        let total = 0;

        let delivery = 0;
        const data = await getDeliveryFee();
        console.log(data);
        if (checkTypeArr(data)) {
          delivery = data[0].amount;
        }
        total = (parseFloat(subTotal) + delivery).toFixed(2);
        console.log("Total", total);
        setOrderedProducts(d);
        setPrice({ ...price, subTotal, total, delivery });
      }
    })();
  }, [cartItems]);

  const cartHandler = () => {
    if (orderedProducts && orderedProducts.length > 0) {
      navigate("/shipping", { state: { orderedProducts, paymentMode } });
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
                    {cartItems && cartItems.length > 0 ? (
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
                      ))
                    ) : (
                      <p>No items added to cart</p>
                    )}
                  </div>
                </div>
                <div className="col-md-4 col-12">
                  <div className="cart_right">
                    <div className="cart_item">
                      <h3>Summary</h3>
                      <p>
                        Subtotal:{" "}
                        <b>
                          $
                          {price?.subTotal &&
                            parseFloat(price?.subTotal).toFixed(2)}
                        </b>
                      </p>
                      <p>
                        Delivery Charge:{" "}
                        <b>
                          $
                          {price?.delivery &&
                            parseFloat(price?.delivery).toFixed(2)}
                        </b>
                      </p>
                      <p>
                        Total amount to be paid:{" "}
                        <b>
                          ${price?.total && parseFloat(price?.total).toFixed(2)}
                        </b>
                      </p>
                      <div className="payment_mode py-3">
                        <h4>Payment Mode:</h4>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="paymentMode"
                            id="cod"
                            value="cod"
                            checked={paymentMode === "cod"}
                            onChange={(e) => setPaymentMode(e.target.value)}
                          />
                          <label className="form-check-label" htmlFor="cod">
                            Cash On Delivery
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="paymentMode"
                            id="online"
                            value="online"
                            checked={paymentMode === "online"}
                            onChange={(e) => setPaymentMode(e.target.value)}
                          />
                          <label className="form-check-label" htmlFor="online">
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

export default Cart;
