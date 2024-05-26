import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAPI, postAPI } from "../../utils/fetchAPIs";
import { useSelector } from "react-redux";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  inputChange,
  inputChangePrevent,
  inputOnWheelPrevent,
} from "../../Helper/smallFun";
import { Link, useLocation, useNavigate } from "react-router-dom";
import HeaderAdmin from "../../components/HeaderAdmin";
import { addDays, formatDateDashed } from "../../utils/dateTimeFormat";
import { submitHandler } from "../../Helper/submitHandler";

const Shipment = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { token } = useSelector((state) => state.auth);
  const [fields, setFields] = useState({
    shipDatestamp: "",
    totalDeclaredValue: "",
    shipper_streetLines: "",
    shipper_city: "",
    shipper_stateOrProvinceCode: "",
    shipper_postalCode: "",
    shipper_countryCode: "US",
    shipper_personName: "",
    shipper_emailAddress: "",
    shipper_phoneExtension: "+1",
    shipper_phoneNumber: "",
    shipper_companyName: "",
    weight: "",
  });

  return (
    <div className="fixed-nav sticky-footer bg-dark" id="page-top">
      <HeaderAdmin />
      <div className="content-wrapper">
        <div className="container-fluid">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/admin">Dashboard</Link>
            </li>
            <li className="breadcrumb-item active">Add Shipment</li>
          </ol>
          <div className="container mb_100">
            <div className="row mb-1 align-items-end">
              <div className="col-md-3">
                <div className="mb-3 w-100">
                  <label htmlFor="shipDatestamp" className="w-100 mb-1">
                    Shipment Date
                  </label>
                  <ReactDatePicker
                    selected={fields?.shipDatestamp}
                    onChange={(date) =>
                      setFields({
                        ...fields,
                        shipDatestamp: formatDateDashed(date),
                      })
                    }
                    value={fields?.shipDatestamp}
                    name="shipDatestamp"
                    id="shipDatestamp"
                    dateFormat="dd/MM/yyyy"
                    className="form-control"
                    placeholderText="YYYY-MM-DD"
                    minDate={new Date()}
                    maxDate={addDays(new Date(), 7)}
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3 w-100">
                  <label htmlFor="totalDeclaredValue" className="w-100 mb-1">
                    Total Amount
                  </label>
                  <input
                    type="number"
                    name="totalDeclaredValue"
                    id="totalDeclaredValue"
                    value={fields?.totalDeclaredValue}
                    onChange={(e) => inputChange(e, fields, setFields)}
                    className="form-control"
                    onWheel={(e) => inputOnWheelPrevent(e)}
                    onKeyDown={inputChangePrevent}
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3 w-100">
                  <label htmlFor="weight" className="mb-1">
                    Package Weight
                  </label>
                  <input
                    type="text"
                    name="weight"
                    id="weight"
                    value={fields?.weight}
                    onChange={(e) => inputChange(e, fields, setFields)}
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="card p-3 mb-3">
                  <h4>Shipper Personal Info</h4>
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <label htmlFor="shipper_personName" className="mb-1">
                        Shipper Person Name
                      </label>
                      <input
                        type="text"
                        name="shipper_personName"
                        id="shipper_personName"
                        value={fields?.shipper_personName}
                        onChange={(e) => inputChange(e, fields, setFields)}
                        className="form-control"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="shipper_emailAddress" className="mb-1">
                        Email
                      </label>
                      <input
                        type="text"
                        name="shipper_emailAddress"
                        id="shipper_emailAddress"
                        value={fields?.shipper_emailAddress}
                        onChange={(e) => inputChange(e, fields, setFields)}
                        className="form-control"
                      />
                    </div>
                    {/* <div className="col-12 col-md-6">
                      <label htmlFor="shipper_phoneExtension" className="mb-1">
                        Phone Extension
                      </label>
                      <input
                        type="text"
                        name="shipper_phoneExtension"
                        id="shipper_phoneExtension"
                        value={fields?.shipper_phoneExtension}
                        onChange={(e) => inputChange(e, fields, setFields)}
                        className="form-control"
                      />
                    </div> */}
                    <div className="col-12 col-md-6">
                      <label htmlFor="shipper_phoneNumber" className="mb-1">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="shipper_phoneNumber"
                        id="shipper_phoneNumber"
                        value={fields?.shipper_phoneNumber}
                        onChange={(e) => inputChange(e, fields, setFields)}
                        className="form-control"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="shipper_companyName" className="mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="shipper_companyName"
                        id="shipper_companyName"
                        value={fields?.shipper_companyName}
                        onChange={(e) => inputChange(e, fields, setFields)}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card p-3 mb-3">
                  <h4>Shipper Address</h4>
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <label htmlFor="shipper_streetLines" className="mb-1">
                        Street Lines
                      </label>
                      <input
                        type="text"
                        name="shipper_streetLines"
                        id="shipper_streetLines"
                        value={fields?.shipper_streetLines}
                        onChange={(e) => inputChange(e, fields, setFields)}
                        className="form-control"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="shipper_city" className="mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        name="shipper_city"
                        id="shipper_city"
                        value={fields?.shipper_city}
                        onChange={(e) => inputChange(e, fields, setFields)}
                        className="form-control"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label
                        htmlFor="shipper_stateOrProvinceCode"
                        className="mb-1"
                      >
                        State or Province Code
                      </label>
                      <input
                        type="text"
                        name="shipper_stateOrProvinceCode"
                        id="shipper_stateOrProvinceCode"
                        value={fields?.shipper_stateOrProvinceCode}
                        onChange={(e) => inputChange(e, fields, setFields)}
                        className="form-control"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="shipper_postalCode" className="mb-1">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        name="shipper_postalCode"
                        id="shipper_postalCode"
                        maxLength={"6"}
                        value={fields?.shipper_postalCode}
                        onChange={(e) => inputChange(e, fields, setFields)}
                        className="form-control"
                      />
                    </div>
                    {/* <div className="col-12 col-md-6">
                      <label htmlFor="shipper_countryCode" className="mb-1">
                        Country Code
                      </label>
                      <input
                        type="text"
                        name="shipper_countryCode"
                        id="shipper_countryCode"
                        value={fields?.shipper_countryCode}
                        onChange={(e) => inputChange(e, fields, setFields)}
                        className="form-control"
                      />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            {console.log("fd", fields)}
            <button
              type="button"
              onClick={(e) => submitHandler(e, { state, fields }, token)}
              className="btn btn-primary"
            >
              SUBMIT
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="btn btn-secondary m-2"
            >
              BACK
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

export default Shipment;
