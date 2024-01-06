import React from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Login } from "../pages/auth/login/Login";
import ForgetPassword from "../pages/auth/forgetPassword/ForgetPassword";
import { useRoutes } from "../utils/hooks/useRoutes";
import Protected from "./Protected";
import Public from "./Public";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { LinearProgress } from "@mui/material";
import { useSelector } from "react-redux";
import classes from "./Routes.module.scss";
const Routes = (): JSX.Element => {
  const { userRoutes } = useRoutes();
  const { isLoading } = useSelector((state: any) => state.root.location);

  return (
    <>
      {isLoading && (
        <div className={classes.loader_container}>
          <LinearProgress className={classes.loader} color="success" />
        </div>
      )}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
      />
      <ReactRoutes>
        <Route element={<Public />}>
          <Route index path="/" element={<Login />} />
          <Route element={<ForgetPassword />} path="/forgetPassword" />
        </Route>
        <Route element={<Protected />}>
          <Route element={<Layout />}>
            {userRoutes?.map((item) => {
              return (
                <>
                  <Route path={item?.to} element={<item.component />} />
                  {item?.edit_to && (
                    <Route
                      path={item?.edit_to}
                      element={<item.edit_component />}
                    />
                  )}
                  {item?.add_to && (
                    <Route
                      path={item?.add_to}
                      element={<item.add_component />}
                    />
                  )}
                  {item?.view_to && (
                    <Route
                      path={item?.view_to}
                      element={<item.view_component />}
                    />
                  )}
                  {item?.select_location_to && (
                    <Route
                      path={item?.select_location_to}
                      element={<item.select_location_component />}
                    />
                  )}
                </>
              );
            })}
          </Route>
        </Route>
      </ReactRoutes>
    </>
  );
};
export default Routes;
