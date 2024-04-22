import { useState } from "react";
import {
  inputChange,
  inputChangePrevent,
  inputOnWheelPrevent,
} from "../../Helper/smallFun";
import { postAPI } from "../../utils/fetchAPIs";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginHandler } from "../../redux/slices/loginSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    phone: "",
    password: "",
  });

  const loginFun = async (e) => {
    e.preventDefault();
    const { phone, password } = form;
    if (phone === "" || password === "") {
      toast.warn("Please enter all required fields!");
      return;
    }
    const data = await postAPI("login/admin", form, null);
    if (data.status) {
      toast.success("You have successfully logged in!");
      dispatch(loginHandler(data));
    } else {
      toast.error(data?.msg);
    }
  };

  return (
    <>
      <div className="container-1">
        <div className="text-center mb-10">
          <h1 className="text-dark mb-3">Admin Panel</h1>
        </div>
        <p>We&apos;re so excited to see you again!</p>
        <form onSubmit={loginFun} className="w-100">
          <div className="form-floating mb-3 w-100">
            <input
              type="number"
              name="phone"
              className="form-control"
              id="floatingInput"
              placeholder=""
              value={form?.phone}
              onChange={(e) => inputChange(e, form, setForm)}
              onWheel={inputOnWheelPrevent}
              onKeyDown={inputChangePrevent}
            />
            <label htmlFor="floatingInput">Phone</label>
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
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button className="login-ahref">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
