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
import AddToCartPage from "./pages/AddToCartPage";
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

const Layout = () => {
  const { token } = useSelector((state) => state.auth);
  return (
    <>
      <BrowserRouter>
        {!token && <Header />}
        <Routes>
          {token ? (
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
            </>
          ) : (
            <>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/admin" element={<Login />} />
              <Route exact path="/login" element={<UserLogin />} />
              <Route exact path="/products" element={<Products />} />
              <Route exact path="/product/:id" element={<ProductDetails />} />
              <Route exact path="/wishlist" element={<Wishlists />} />
              <Route exact path="/orders" element={<Orders />} />
              <Route
                exact
                path="/order-details/:id"
                element={<OrderDetails />}
              />
              <Route exact path="/faqs" element={<FAQs />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/cart" element={<AddToCartPage />} />
              <Route exact path="/coffee" element={<Coffee />} />
              <Route exact path="/shipping" element={<ShippingAddress />} />
            </>
          )}
        </Routes>
        {!token && <Footer />}
      </BrowserRouter>
    </>
  );
};

export default Layout;
