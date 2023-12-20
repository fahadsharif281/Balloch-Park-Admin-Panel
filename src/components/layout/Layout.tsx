import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import classes from "./Layout.module.scss";
import { Sidebar } from "../sidebar/Sidebar";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import Drawer from "../drawer/Drawer";
const Layout = (): JSX.Element => {
  const [openMenu, setOpenMenu] = useState(true);
  const responsiveView = useMediaQuery("(max-width:1000px)");
  useEffect(() => {
    if (responsiveView) {
      setOpenMenu(false);
    } else {
      setOpenMenu(true);
    }
  }, [responsiveView]);
  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className={classes.container}>
      <div className={classes.flex}>
        {openMenu && (
          <>
            {responsiveView ? (
              <Drawer openMenu={openMenu} handleToggleMenu={handleToggleMenu} />
            ) : (
              <div className={classes.side_bar}>
                <Sidebar responsiveView={responsiveView} />
              </div>
            )}
          </>
        )}

        <div
          className={
            responsiveView
              ? classes.close_menu
              : !openMenu
              ? classes.close_menu
              : classes.main
          }
        >
          <header>
            <div
              className={
                responsiveView
                  ? `${classes.close_menu} ${classes.header}`
                  : !openMenu
                  ? `${classes.close_menu} ${classes.header}`
                  : classes.header
              }
            >
              <Header openMenu={openMenu} handleToggleMenu={handleToggleMenu} />
            </div>
          </header>
          <main>
            <div className={classes.outlet}>
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
export default Layout;
