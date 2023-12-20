import React from "react";
import logo from "../../assets/jpg/sideBarLogo.jpeg";
import classes from "./Sidebar.module.scss";
export const Sidebar = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.img}>
          <img src={logo} width="235px" height="100%" />
        </div>
      </div>
    </>
  );
};
