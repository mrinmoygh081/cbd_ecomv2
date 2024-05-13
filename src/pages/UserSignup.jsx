import { useState } from "react";
import {
  inputChange,
  inputChangePrevent,
  inputOnWheelPrevent,
} from "../Helper/smallFun";
import { postAPI } from "../utils/fetchAPIs";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginHandler } from "../redux/slices/loginSlice";
import { useNavigate } from "react-router-dom";

const UserSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    repassword: "",
  });

  const loginFun = async (e) => {
    e.preventDefault();
    const { name, phone, email, password, repassword } = form;
    if (
      name === "" ||
      phone === "" ||
      email === "" ||
      password === "" ||
      repassword === ""
    ) {
      return toast.warn("Please enter all fields!");
    }
    if (phone && phone.length > 10) {
      return toast.warn("Phone number must be less than equal to 10");
    }
    if (password !== repassword) {
      return toast.warn("Password and Retype Password must be same!");
    }
    const data = await postAPI("user/signup", form, null);
    if (data.status) {
      dispatch(loginHandler(data));
      navigate("/");
    } else {
      toast.error(data?.data);
    }
  };

  return (
    <>
      <div className="container-1">
        <div className="text-center mb-10">
          <h1 className="text-dark mb-3">sIGN UP</h1>
        </div>
        <p>Please fill up the form to register yourself!</p>
        <form onSubmit={loginFun} className="w-100">
          <div className="form-floating mb-3 w-100">
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              placeholder=""
              value={form?.name}
              onChange={(e) => inputChange(e, form, setForm)}
            />
            <label htmlFor="name">NAME</label>
          </div>
          <div className="form-floating mb-3 w-100">
            <input
              type="number"
              name="phone"
              className="form-control"
              id="phone"
              placeholder=""
              value={form?.phone}
              onChange={(e) => inputChange(e, form, setForm)}
              onWheel={inputOnWheelPrevent}
              onKeyDown={inputChangePrevent}
            />
            <label htmlFor="phone">PHONE</label>
          </div>
          <div className="form-floating mb-3 w-100">
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder=""
              value={form?.email}
              onChange={(e) => inputChange(e, form, setForm)}
              onWheel={inputOnWheelPrevent}
              onKeyDown={inputChangePrevent}
            />
            <label htmlFor="email">EMAIL</label>
          </div>
          <div className="form-floating mb-3 w-100">
            <input
              type="password"
              name="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={form?.password}
              onChange={(e) => inputChange(e, form, setForm)}
              autoComplete={"off"}
            />
            <label htmlFor="floatingPassword">PASSWORD</label>
          </div>
          <div className="form-floating mb-3 w-100">
            <input
              type="password"
              name="repassword"
              className="form-control"
              id="repassword"
              placeholder="ReType Password"
              value={form?.repassword}
              onChange={(e) => inputChange(e, form, setForm)}
              autoComplete={"off"}
            />
            <label htmlFor="repassword">RETYPE PASSWORD</label>
          </div>
          <button className="login-ahref">SIGN UP</button>
        </form>
      </div>
    </>
  );
};

export default UserSignup;
