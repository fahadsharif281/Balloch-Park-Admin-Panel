import classes from "./Header.module.scss";
import { Button } from "react-bootstrap";
import avatar from "../../assets/png/personAvatar.png";
import openMenuImage from "../../assets/png/openMenu.png";
import closeMenuImage from "../../assets/png/closeMenu.png";
import {
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { EditSvg, LogoutSvg } from "../../assets/svg/SvgImges";
import { useSelector } from "react-redux";

const Header = ({
  handleToggleMenu = () => {},
  openMenu,
}: {
  handleToggleMenu: () => void;
  openMenu: boolean;
}): JSX.Element => {
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const containerRef: any = useRef(null);
  const { user } = useSelector((state: any) => state.root.user);
  const handleDropDownMenu = () => {
    setDropDownMenu(!dropDownMenu);
  };

  const handleClickOutside = (event: any) => {
    if (
      containerRef.current &&
      !containerRef?.current?.contains(event?.target)
    ) {
      setDropDownMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={classes.container}>
        <div>
          <Button
            onClick={handleToggleMenu}
            className={`${classes.button} ${classes.menu}`}
          >
            {openMenu ? (
              <img src={openMenuImage} width="100%" height="100%" />
            ) : (
              <img src={closeMenuImage} width="100%" height="100%" />
            )}
          </Button>
        </div>
        <div className={classes.menu_drop_down} ref={containerRef}>
          <Button
            tabIndex={1}
            onClick={handleDropDownMenu}
            className={classes.button}
          >
            <div>
              <img src={avatar} />
            </div>
            <div>Admin</div>
          </Button>
          {dropDownMenu && (
            <div className={classes.menu_list}>
              <MenuList>
                <MenuItem selected className={classes.menu_item}>
                  <div className={classes.list_item}>
                    <div className={classes.user_avatar}>
                      <img src={avatar} />
                      <div>
                        <div>Admin</div>
                        <div className={classes.email}>{user?.email}</div>
                      </div>
                    </div>
                  </div>
                </MenuItem>
                <div className={classes.logout_avatar}>
                  <LogoutSvg width="18px" height="18px" />
                </div>
                <Divider color="black" />
                <MenuItem>
                  {" "}
                  <ListItemIcon>
                    <EditSvg />
                  </ListItemIcon>
                  <ListItemText>
                    <span className={classes.text}> Edit Password</span>
                  </ListItemText>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <ListItemIcon>
                    <LogoutSvg width="1em" height="1em" />
                  </ListItemIcon>
                  <ListItemText className={classes.text}>
                    <span className={classes.text}>Logout</span>
                  </ListItemText>
                </MenuItem>
              </MenuList>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Header;
