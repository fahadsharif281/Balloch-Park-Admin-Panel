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
const Routes = (): JSX.Element => {
  const { userRoutes } = useRoutes();
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
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
