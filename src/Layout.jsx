import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Footer } from "./components/Footer";
import Products from "./pages/Products";
import Wishlists from "./pages/Wishlists";
import Orders from "./pages/Orders";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Coffee from "./pages/Coffee";
import { useSelector } from "react-redux";
import Login from "./pages/admin/Login";
import NewProducts from "./pages/admin/NewProducts";
import { Category } from "./pages/admin/Category";
import { AdminProducts } from "./pages/admin/AdminProducts";
import ShippingAddress from "./pages/ShippingAddress";
import ProductDetails from "./pages/ProductDetails";
import UserLogin from "./pages/UserLogin";
import { AdminOrders } from "./pages/admin/AdminOrders";
import { AdminOrdersDetails } from "./pages/admin/AdminOrdersDetails";
import OrderDetails from "./pages/OrderDetails";
import News from "./pages/News";
import Testimonials from "./pages/Testimonials";
import { DeliveryCharge } from "./pages/admin/DeliveryCharge";
import Cart from "./pages/Cart";
import UserSignup from "./pages/UserSignup";
import ScrollToTopOnPageChange from "./components/ScrollToTopOnPageChange";

const Layout = () => {
  const { token, role } = useSelector((state) => state.auth);
  return (
    <>
      <BrowserRouter>
        {(!token || role !== "admin") && <Header />}
        <ScrollToTopOnPageChange />
        <Routes>
          {token && role === "admin" ? (
            <>
              <Route exact path="/admin" element={<AdminProducts />} />
              <Route exact path="/admin/products" element={<AdminProducts />} />
              <Route
                exact
                path="/admin/products/add"
                element={<NewProducts />}
              />
              <Route exact path="/admin/orders" element={<AdminOrders />} />
              <Route
                exact
                path="/admin/orders-details/:id"
                element={<AdminOrdersDetails />}
              />
              <Route exact path="/admin/categories" element={<Category />} />
              <Route
                exact
                path="/admin/delivery"
                element={<DeliveryCharge />}
              />
            </>
          ) : (
            <>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/admin" element={<Login />} />
              <Route exact path="/login" element={<UserLogin />} />
              <Route exact path="/signup" element={<UserSignup />} />
              <Route exact path="/products" element={<Products />} />
              <Route exact path="/product/:id" element={<ProductDetails />} />
              <Route exact path="/wishlist" element={<Wishlists />} />
              <Route exact path="/orders" element={<Orders />} />
              <Route exact path="/news" element={<News />} />
              <Route exact path="/testimonials" element={<Testimonials />} />
              <Route
                exact
                path="/order-details/:id"
                element={<OrderDetails />}
              />
              <Route exact path="/faqs" element={<FAQs />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/coffee" element={<Coffee />} />
              <Route exact path="/shipping" element={<ShippingAddress />} />
            </>
          )}
        </Routes>
        {(!token || role !== "admin") && <Footer />}
      </BrowserRouter>
    </>
  );
};

export default Layout;
