import React, { useState } from "react";
import "./Header.css";
import { useThemeContext } from "../Context/ThemeModeContext";
import { Outlet, useNavigate } from "react-router-dom";
import { Path, SidebarTab } from "../../constants/constants";
import { useDispatch } from "react-redux";
import { setSidebarTab } from "../../redux/reducers/tabReducer";
import Filter from "../Filter";
import Search from "../Search";

const Header = () => {
  // Theme
  const { isDark, onChangeTheme } = useThemeContext();
  const onClick = onChangeTheme ? onChangeTheme : () => {};
  // Burger;
  const [menu_class, setMenuClass] = useState("menu hidden");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const TABS = [
    {
      tabName: SidebarTab.Home,
      icon: "fa-solid fa-home",
      path: Path.Home,
    },
    {
      tabName: SidebarTab.Trends,
      icon: "fa-solid fa-fire",
      path: Path.Trends,
    },
    {
      tabName: SidebarTab.Favorites,
      icon: "fa-solid fa-bookmark",
      path: Path.Favorites,
    },
    {
      tabName: SidebarTab.Settings,
      icon: "fa-solid fa-gear",
      path: Path.Settings,
    },
  ];

  const tabClick = (path: string, tabName: string) => {
    navigate(path);
    dispatch(setSidebarTab(tabName));
  };

  return (
    <div className="allContent">
      <div className="container">
        <div className="wrapperHeader">
          <p>
            pix<span>ema</span>
          </p>
          <Search />
          <div className="square">
            <p className="initials">logo</p>
          </div>
          <p className="name">Your Name</p>

          {/* <div
            onClick={onClick}
            className={"darkTheme " + (isDark ? "dark" : "light")}
          >
            <div className="toggle-container">
              <div className="toggle-circle"></div>
            </div>

            <input type="checkbox" className="toggle-input" />
          </div> */}

          <div className={menu_class}></div>
        </div>
        <div className="leftContent">
          <div className="wrapperButton">
            <div>
              {TABS.map((item: any) => {
                return (
                  <button onClick={() => tabClick(item.path, item.tabName)}>
                    <i className={item.icon}></i> {item.tabName}
                  </button>
                );
              })}
            </div>
            <div>
              <p className="logo">© All Rights Reserved</p>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
      <Filter />
    </div>
  );
};

export default Header;
