import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAPI, postAPI } from "../../utils/fetchAPIs";
import { useSelector } from "react-redux";
import {
  handleFileChange,
  inputChange,
  inputChangePrevent,
  inputOnWheelPrevent,
} from "../../Helper/smallFun";
import { Link, useNavigate } from "react-router-dom";
import HeaderAdmin from "../../components/HeaderAdmin";

const NewProducts = () => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const [cat, setCat] = useState(null);
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    cat_id: "",
    brand: "",
    rating: "",
    quantity: "",
    guideline: "",
    type: "",
    images: null,
  });

  const editProductHandler = async (e) => {
    e.preventDefault();
    const {
      name,
      price,
      description,
      cat_id,
      brand,
      rating,
      quantity,
      guideline,
      type,
      images,
    } = form;
    if (
      name === "" ||
      price === "" ||
      description === "" ||
      brand === "" ||
      rating === "" ||
      quantity === "" ||
      guideline === "" ||
      type === "" ||
      images === null
    ) {
      toast.warn("Please enter all required fields!");
      return;
    }
    let fD = new FormData();
    fD.append("name", name);
    fD.append("price", price);
    fD.append("description", description);
    fD.append("cat_id", cat_id);
    fD.append("brand", brand);
    fD.append("rating", rating);
    fD.append("quantity", quantity);
    fD.append("guideline", guideline);
    fD.append("type", type);
    fD.append("images", images);

    const data = await postAPI("admin/product", fD, token);
    if (data.status) {
      toast.success("You have succesfully added the product!");
      navigate("/admin/products");
    } else {
      toast.error(data?.msg);
    }
  };

  useEffect(() => {
    (async () => {
      const d = await getAPI("allCategory", null);
      if (d.status) {
        setCat(d.data);
      }
    })();
  }, []);

  return (
    <div className="fixed-nav sticky-footer bg-dark" id="page-top">
      <HeaderAdmin />
      <div className="content-wrapper">
        <div className="container-fluid">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/admin">Dashboard</Link>
            </li>
            <li className="breadcrumb-item active">Add Product</li>
          </ol>
          <div className="mb_100">
            <div className="row mb-4 align-items-end">
              <div className="col-md-6">
                <div className="mb-3 w-100">
                  <label htmlFor="floatingInput">Name</label>
                  <p>Name</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-floating mb-3 w-100">
                  <input
                    type="number"
                    name="price"
                    className="form-control"
                    id="floatingInput"
                    placeholder=""
                    value={form?.price}
                    onChange={(e) => inputChange(e, form, setForm)}
                    onWheel={inputOnWheelPrevent}
                    onKeyDown={inputChangePrevent}
                  />
                  <label htmlFor="floatingInput">Price</label>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-floating mb-3 w-100">
                  <select
                    className="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                    onChange={(e) =>
                      setForm({ ...form, cat_id: parseInt(e.target.value) })
                    }
                  >
                    <option value={null}>Open this select menu</option>
                    {cat &&
                      cat.map((item, i) => (
                        <option value={item?.cat_id} key={i}>
                          {item?.name}
                        </option>
                      ))}
                  </select>
                  <label htmlFor="floatingSelect">Category</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea"
                    style={{ height: "150px" }}
                    name="description"
                    onChange={(e) => inputChange(e, form, setForm)}
                  ></textarea>
                  <label htmlFor="floatingTextarea">Description</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating mb-3 w-100">
                  <input
                    type="text"
                    name="brand"
                    className="form-control"
                    id="floatingInput"
                    placeholder=""
                    value={form?.brand}
                    onChange={(e) => inputChange(e, form, setForm)}
                  />
                  <label htmlFor="floatingInput">Brand</label>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-floating mb-3 w-100">
                  <input
                    type="number"
                    name="rating"
                    className="form-control"
                    id="floatingInput"
                    placeholder=""
                    value={form?.rating}
                    onChange={(e) => inputChange(e, form, setForm)}
                    onWheel={inputOnWheelPrevent}
                    onKeyDown={inputChangePrevent}
                  />
                  <label htmlFor="floatingInput">Rating</label>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-floating mb-3 w-100">
                  <input
                    type="number"
                    name="quantity"
                    className="form-control"
                    id="floatingInput"
                    placeholder=""
                    value={form?.quantity}
                    onChange={(e) => inputChange(e, form, setForm)}
                    onWheel={inputOnWheelPrevent}
                    onKeyDown={inputChangePrevent}
                  />
                  <label htmlFor="floatingInput">Quantity</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea"
                    style={{ height: "150px" }}
                    name="guideline"
                    onChange={(e) => inputChange(e, form, setForm)}
                  ></textarea>
                  <label htmlFor="floatingTextarea">Guideline</label>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-floating mb-3">
                  <select
                    className="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                    onChange={(e) =>
                      setForm({ ...form, type: parseInt(e.target.value) })
                    }
                  >
                    <option value={null}>Open this select menu</option>
                    <option value={0}>General Product</option>
                    <option value={1}>Top Product</option>
                    <option value={2}>Special Product</option>
                  </select>
                  <label htmlFor="floatingSelect">Category</label>
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3">
                  <label htmlFor="formFileMultiple" className="form-label">
                    Product Images
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    id="formFileMultiple"
                    name="images"
                    onChange={(e) => handleFileChange(e, form, setForm)}
                    multiple
                  />
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={editProductHandler}
              className="btn btn-primary"
            >
              Update
            </button>
          </div>
        </div>

        <footer className="sticky-footer">
          <div className="container">
            <div className="text-center">
              <small>Copyright © 2024</small>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default NewProducts;
