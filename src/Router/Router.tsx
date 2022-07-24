import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Header from "../components/Header/Header";
import { Path } from "../constants/constants";
import Login from "../components/Login";
import Settings from "../iconsSvg/Settings";
import Films from "../pages/Films/Films";
import AuthorizationWrapper from "../pages/Autorization/Autorization";
import Registration from "../components/Registration";
import { useSelector } from "react-redux";
import { AuthSelector } from "../redux/reducers/authReducer";

const Router = () => {
  const isLoggedIn = useSelector(AuthSelector.getLogStatus);

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path={Path.Home} element={<Films pageName={""} />} />
            <Route path={Path.Trends} element={<Films pageName={""} />} />
            <Route path={Path.Favorites} element={<Films pageName={""} />} />
            <Route path={Path.Settings} element={<Settings />} />
          </Route>
          <Route
            path="*"
            element={<Navigate to={Path.Home} replace></Navigate>}
          ></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<AuthorizationWrapper />}>
            <Route path={Path.Login} element={<Login />} />
            <Route path={Path.Registration} element={<Registration />} />
          </Route>
          <Route
            path="*"
            element={<Navigate to={Path.Login} replace></Navigate>}
          ></Route>
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default Router;
