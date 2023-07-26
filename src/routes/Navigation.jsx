import React from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as AppLogo } from "../assets/logo.svg";

const Navigation = () => {
  return (
    <>
      <div className="navigation-wrapper">
        <Link className="logo-wrapper" to="/">
          <AppLogo className="logo" />
        </Link>
        <div className="nav-links-wrapper">
          <Link className="nav-link" to={"/shop"}>
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
