import classes from "./Header.module.scss";
import { Button, Form } from "react-bootstrap";
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
import Modall from "../common/Modal/Modal";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "../common/Input/Input";
import view from "../../assets/png/view.png";
import hide from "../../assets/png/hide.png";
import CustomButton from "../common/Button/Button";

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
  const [show, setShow] = useState(false);
  const [showimg1, setShowimg1] = useState(false);
  const [showimg2, setShowimg2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      newPassword: "",
    },
    onSubmit: async (values) => {
      const credential = {
        email: values.email,
        password: values.password,
        newPassword: values.newPassword,
      };
      // dispatch(postLoginUserAsync(credential)).then((response: any) => {
      //   if (response.type === "user/postLoginUserAsync/fulfilled") {
      //     navigate("/home");
      //   }
      // });
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().min(8).required("Password is required"),
      newPassword: Yup.string().min(8).required("Password is required"),
    }),
  });
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
                <MenuItem onClick={handleShow}>
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
      {show && (
        <Modall onHide={handleClose} show={show}>
          {" "}
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit(e);
            }}
          >
            <Input
              type="email"
              label="Email Address"
              disabled
              value={user?.email}
            />
            <Input
              imageProps={{
                src: showimg1 ? view : hide,
                onClick: () => {
                  setShowimg1(!showimg1);
                },
              }}
              type={showimg1 ? "text" : "password"}
              label="Old Password"
              placeholder="Enter old password"
              error={
                formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : ""
              }
              value={formik.values.password}
              onChange={formik.handleChange("password")}
              onBlur={formik.handleBlur("password")}
              imageClassName={classes.image}
            />
            <Input
              imageProps={{
                src: showimg2 ? view : hide,
                onClick: () => {
                  setShowimg2(!showimg2);
                },
              }}
              type={showimg2 ? "text" : "password"}
              label="Password"
              placeholder="Enter password"
              error={
                formik.touched.newPassword && formik.errors.newPassword
                  ? formik.errors.newPassword
                  : ""
              }
              value={formik.values.newPassword}
              onChange={formik.handleChange("newPassword")}
              onBlur={formik.handleBlur("newPassword")}
              imageClassName={classes.image}
            />
            <div className={classes.update_button}>
              <CustomButton type="submit" text="Update" />{" "}
            </div>
          </Form>
        </Modall>
      )}
    </>
  );
};
export default Header;
