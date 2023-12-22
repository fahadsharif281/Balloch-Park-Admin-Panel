import { SwipeableDrawer } from "@mui/material";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Sidebar } from "../sidebar/Sidebar";
import logo from "../../assets/jpg/sideBarLogo.jpeg";

const Drawer = ({
  handleToggleMenu = () => {},
  openMenu,
  responsiveView,
}: {
  handleToggleMenu: () => void;
  openMenu: boolean;
  responsiveView: boolean;
}): JSX.Element => {
  return (
    <>
      <SwipeableDrawer
        anchor={"left"}
        open={openMenu}
        onClose={handleToggleMenu}
        onOpen={handleToggleMenu}
      >
        <div>
          <Sidebar
            responsiveView={responsiveView}
            handleToggleMenu={handleToggleMenu}
          />
        </div>
      </SwipeableDrawer>
    </>
  );
};

export default Drawer;
