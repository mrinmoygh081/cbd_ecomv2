import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutHandler } from "../redux/slices/loginSlice";
import { persistor } from "../redux/store";

const HeaderAdmin = () => {
  const dispatch = useDispatch();
  const logOutFun = () => {
    dispatch(logoutHandler());
    persistor.pause();
    persistor.flush().then(() => {
      return persistor.purge();
    });
    window.location.href = "/admin";
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
        id="mainNav"
      >
        <Link className="navbar-brand" to="/admin">
          DASHBOARD
        </Link>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                <i className="fa fa-fw fa-dashboard"></i>
                <span className="nav-link-text">Orders</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/products">
                <i className="fa fa-fw fa-table"></i>
                <span className="nav-link-text">Products</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/categories">
                <i className="fa fa-fw fa-table"></i>
                <span className="nav-link-text">Category</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/delivery">
                <i className="fa fa-fw fa-table"></i>
                <span className="nav-link-text">Delivery</span>
              </Link>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => logOutFun()}>
                <i className="fa fa-fw fa-table"></i>
                <span className="nav-link-text">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default HeaderAdmin;
