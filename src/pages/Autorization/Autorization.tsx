import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../iconsSvg/Logo";
import "./Autorization.css";

const AuthorizationWrapper = () => {
  return (
    <div className="authorization">
      <div className="authorizationBlock">
        <header>
          <Logo></Logo>
        </header>
        <Outlet></Outlet>
        <footer>© All Rights Reserved</footer>
      </div>
    </div>
  );
};

export default AuthorizationWrapper;
