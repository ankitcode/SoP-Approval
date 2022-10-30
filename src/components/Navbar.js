import React from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  let location = useLocation();
    useEffect(()=> {
      //console.log(location.pathname);
    },[location]);
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
        <Link to="/" className="navbar-brand">
          AM SoP Approval
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample05"
          aria-controls="navbarsExample05"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample05">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${location.pathname === "/" ? "active":""}`}>
                Home <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/createNew" className={`nav-link ${location.pathname === "/createNew" ? "active":""}`}>
                Create New
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/viewCreated" className={`nav-link ${location.pathname === "/viewCreated" ? "active":""}`}>
                View Created
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sent" className={`nav-link ${location.pathname === "/sent" ? "active":""}`}>
                Sent
              </Link>
            </li>
          </ul>
        </div>
        </div>
      </nav>
  );
};

export default Navbar;
