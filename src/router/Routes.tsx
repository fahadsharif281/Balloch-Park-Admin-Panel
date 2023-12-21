import React from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Login } from "../pages/auth/login/Login";
import Home from "../pages/home/Home";
import ForgetPassword from "../pages/auth/forgetPassword/ForgetPassword";
import Dashboard from "../pages/Dashboard/Dashboard";
import { useRoutes } from "../utils/hooks/useRoutes";
const Routes = (): JSX.Element => {
  const { userRoutes } = useRoutes();
  return (
    <>
      <ReactRoutes>
        <Route index path="/" element={<Login />} />
        <Route element={<ForgetPassword />} path="/forgetPassword" />
        <Route element={<Layout />}>
          {userRoutes.map((item) => {
            return (
              <>
                <Route path={item?.to} element={<item.component />} />
              </>
            );
          })}
        </Route>
      </ReactRoutes>
    </>
  );
};
export default Routes;
