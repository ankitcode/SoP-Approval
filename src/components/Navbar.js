import React from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  //let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    console.log("logout");
    window.location.reload();
    //navigate("/login");
  };

  let location = useLocation();
  useEffect(() => {}, [location]);
  return (
    <div className="wrapper">
        <nav className="main-header navbar navbar-expand-md navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link to="/" className="navbar-brand">
              AM SoP Approval
            </Link>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExample05"
              aria-controls="navbarsExample05"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse collapse" id="navbarsExample05" >
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link
                    to="/inbox"
                    className={`nav-link ${
                      location.pathname === "/inbox" ? "active" : ""
                    }`}
                  >
                    Inbox
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/createNew"
                    className={`nav-link ${
                      location.pathname === "/createNew" ? "active" : ""
                    }`}
                  >
                    Create New
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/sent"
                    className={`nav-link ${
                      location.pathname === "/sent" ? "active" : ""
                    }`}
                  >
                    Sent
                  </Link>
                </li>
              </ul>
            </div>
            <button onClick={handleLogout} className="btn btn-secondary">
              Logout
            </button>
          </div>
        </nav>
        </div>
  );
};

export default Navbar;
