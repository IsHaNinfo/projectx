import React from "react";
import { Link } from "react-router-dom";
import "./EnterCompany.css";
function EnterCompany() {
  return (
    <div className=" formain">
      <div className="main-container">
        <h1 className="mainc">Join company</h1>
      </div>
      <div className="formboxC">
        <label>Enter Company key</label>
        <input type="email" name="email" class="form-control"></input>
      </div>

      <submitPopup
        class="btn btn-primary"
        style={{
          width: "380px",
          height: "50px",
          size: "20px",
          top: " 60%",
          position: "absolute",
          marginLeft: "39%",
        }}
      >
        Submit
      </submitPopup>
      <submitPopup />

      <Link to="/Methods">
        <p className="Methods">Back to Choose</p>
      </Link>
    </div>
  );
}

export default EnterCompany;
