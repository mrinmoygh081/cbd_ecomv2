import React, { useEffect, useState } from "react";
import ProductBuyNow from "../components/ProductBuyNow";
import { Link, useLocation } from "react-router-dom";
import { FiPlusCircle } from "react-icons/fi";
import { apiCallBack } from "../utils/fetchAPIs";
import { checkTypeArr } from "../Helper/smallFun";
import LoadingView from "../components/LoadingView";

const Products = () => {
  const [data, setData] = useState(null);
  const [catId, setCatId] = useState(null);
  const [cat, setCat] = useState(null);
  const [productByCat, setProductByCat] = useState(null);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(null);

  const getProductsByCat = async () => {
    try {
      // Fetch all categories
      // let result = [];
      let categories = "";
      const res = await apiCallBack("GET", "user/category", null, null);
      if (res.status) {
        categories = res.data;
        setCat(categories);
      }
      // if (checkTypeArr(categories)) {
      //   await Promise.all(
      //     await categories.map(async (item, index) => {
      //       const products = await apiCallBack(
      //         "POST",
      //         "user/product",
      //         {
      //           catId: item?.cat_id,
      //         },
      //         null
      //       );
      //       result.push({
      //         cat_name: item.name,
      //         cat_id: item?.cat_id,
      //         products: products.data,
      //       });
      //     })
      //   );
      // }
      // setProductByCat(result);
    } catch (error) {
      console.error("Error fetching products by category:", error);
      throw error;
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const catIdParam = params.get("cat_id");
    setCatId(catIdParam);
  }, [location.search]);

  const getProdByCatList = async (catId) => {
    let body = null;
    if (catId) {
      setIsLoading(true);
      body = {
        catId: catId,
      };
      const res = await apiCallBack("POST", "user/product", body, null);
      setData(res?.data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProductsByCat();
    getProdByCatList(catId);
  }, [catId]);

  return (
    <>
      <section className="product_section">
        <div className="section_head">
          <img src={require("../assets/imgs/124r.png")} alt="" />
          <h2 style={{ transform: "translate(-50%, -10%)" }}>PRODUCTS</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-12">
              <div className="d-md-block d-none cat_choice">
                <div className="p_category">
                  <h3>All Categories</h3>
                  <ul>
                    {cat &&
                      cat.map((item, i) => (
                        <li key={i}>
                          <div className="cat_choice_list">
                            <Link to={`/products?cat_id=${item?.cat_id}`}>
                              {item?.name}
                            </Link>
                            {checkTypeArr(item?.children) &&
                              item.children.length > 0 && <FiPlusCircle />}
                          </div>
                          {checkTypeArr(item?.children) &&
                            item.children.length > 0 && (
                              <ul className="subdrop">
                                {item.children.map((it, i) => (
                                  <li key={i}>
                                    <Link to={`/products?cat_id=${it?.cat_id}`}>
                                      {it?.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-9 col-12">
              <div className="section_header">
                <h2>This Week's Special Offers</h2>
                <p>These CBD offer BIG Discounts on some Amazing products.</p>
              </div>
              {!isLoading ? (
                <>
                  <div className="product-cards__slider">
                    <div className="row">
                      {checkTypeArr(data) ? (
                        data.map((item, i) => (
                          <ProductBuyNow
                            name={item?.name}
                            price={item?.price}
                            p_id={item?.product_id}
                            image={item?.image}
                            item={item}
                            key={i}
                          />
                        ))
                      ) : (
                        <>
                          <h4>No Product Found under selected category</h4>
                        </>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <LoadingView />
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
