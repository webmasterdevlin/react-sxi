import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="nav-link" to="/home">
        Home
      </Link>
      <Link className="nav-link" to="/about">
        About
      </Link>
      <Link className="nav-link" to="/login">
        Login
      </Link>
    </nav>
  );
};

export default NavBar;
