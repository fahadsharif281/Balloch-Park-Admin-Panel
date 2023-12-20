import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import classes from "./Layout.module.scss";
import { Sidebar } from "../sidebar/Sidebar";
import { useState } from "react";
const Layout = (): JSX.Element => {
  const [openMenu, setOpenMenu] = useState(true);
  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className={classes.container}>
      <div className={classes.flex}>
        {openMenu && (
          <div className={classes.side_bar}>
            <Sidebar />
          </div>
        )}
        <div className={!openMenu ? classes.close_menu : classes.main}>
          <header>
            <div
              className={
                !openMenu
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
