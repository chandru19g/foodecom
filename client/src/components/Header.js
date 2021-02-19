import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // * NavbarView
  const showNavigation = () => (
    <nav className="navbar navbar-expand-sm navbar-light bg-light text-white">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Logo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse navbar-nav justify-content-end"
          id="navbarTogglerDemo02"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signin" className="nav-link">
                Signin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

  // ** return
  return <header id="header"> {showNavigation()} </header>;
};

export default Header;
