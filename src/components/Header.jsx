import React from "react";
import { Link } from "react-router-dom";
import { cartState } from "../context/Context";

const Header = () => {
  const {
    state: { cart },
  } = cartState();

  return (
    <nav className="navbar navbar-expand-lg bg-dark text-white">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-white" href="#">
          ONLINE SHOP
        </Link>
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
          <div className="ms-auto">
            <Link to="/cart" type="button" class="btn btn-primary">
              Cart <span class="badge text-bg-primary">{cart.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
