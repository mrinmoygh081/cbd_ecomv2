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
import Cart from "./pages/Cart";

const Layout = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/wishlist" element={<Wishlists />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Layout;
