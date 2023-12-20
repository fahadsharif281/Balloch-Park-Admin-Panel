import React from "react";
import logo from "../../assets/jpg/sideBarLogo.jpeg";
import classes from "./Sidebar.module.scss";
import dashboard from "../../assets/png/dashboard.png";
export const Sidebar = ({ responsiveView }: { responsiveView?: boolean }) => {
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
          <div className={classes.menu_item}>
            <div>
              <img src={dashboard} />
            </div>
            <div> Dashboard </div>
          </div>
        </div>
      </div>
    </>
  );
};
