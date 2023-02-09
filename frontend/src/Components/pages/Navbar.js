import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const history = useNavigate();
  const sendl = () => {
    history("/login");
  };

  const sendR = () => {
    history("/Register");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active mx-1 fs-3">Home</a>
              </li>
            </ul>
            <a className="navbar-brand  fs-3 mx-auto" href="#">
              HasthiyaIT
            </a>
            <div>
              <button
                onClick={sendl}
                className="btn btn-outline-primary ms-auto px-4 rounded-pill"
              >
                <i className="fa fa-sign-in me-2"></i>Login
              </button>

              <button
                onClick={sendR}
                className="btn btn-outline-primary ms-2 px-4 rounded-pill"
              >
                <i className="fa fa- me-2"></i>Register
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
