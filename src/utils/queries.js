import { toast } from "react-toastify";
import { getAPI, postAPI } from "./fetchAPIs";

export const getProducts = async (catId, setProducts) => {
  let payload = {
    catId: catId,
  };
  const d = await postAPI("user/product", payload, null);
  if (d?.data === "No data found") {
    setProducts([]);
  } else if (d?.status) {
    setProducts(d?.data);
  } else {
    toast.warning("No Product Found");
  }
};

export const getCategories = async (setCat) => {
  const d = await getAPI("user/category", null);
  if (d?.status) {
    setCat(d?.data);
  } else {
    toast.warning("No Category Found");
  }
};

export const getCategoriesName = async (catId, setCatName) => {
  const d = await getAPI("user/category", null);
  if (d?.status) {
    let cat = "All";
    d?.data &&
      d?.data.map((item) => {
        if (item?.cat_id === catId) {
          cat = item?.name;
        }
      });
    setCatName(cat);
  } else {
    toast.warning("No Category Found");
  }
};
