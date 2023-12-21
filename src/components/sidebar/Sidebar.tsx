import React from "react";
import logo from "../../assets/jpg/sideBarLogo.jpeg";
import classes from "./Sidebar.module.scss";
import dashboard from "../../assets/png/dashboard.png";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { userRoutesAll } from "../../router/AllRoutes";
import Dashboard from "../../pages/Dashboard/Dashboard";
import { useRoutes } from "../../utils/hooks/useRoutes";

const baseURL = process.env.REACT_APP_BASE_URL;
export const Sidebar = ({ responsiveView }: { responsiveView?: boolean }) => {
  const { userRoutes } = useRoutes();
  return (
    <>
      <div className={classes.container}>
        <div className={classes.img}>
          <img
            src={logo}
            width={responsiveView ? "200px" : "235px"}
            height="100%"
          />
        </div>
        <div className={classes.menu_list}>
          {userRoutes?.map((items) => {
            const src = items?.image.includes("base64")
              ? items?.image
              : `${baseURL}/${items?.image}`;
            return (
              <NavLink
                to={items?.to}
                className={({ isActive }) =>
                  isActive ? classes.active_menu_item : classes.menu_item
                }
              >
                <div>
                  <img src={src} />
                </div>
                <div>{items?.screen_name}</div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
};