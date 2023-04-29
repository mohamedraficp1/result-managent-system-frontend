import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { removeCurrentUser } from "../helpers/sessionStorageUtil";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    removeCurrentUser();
    navigate("/login");
  };
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          {/* <img src="/logo.png" alt="Logo" /> */}Malabar International School
        </Link>
      </div>
      <div className="navbar-logout">
        <a onClick={handleLogout}>Logout</a>
      </div>
    </div>
  );
};

export default Navbar;
