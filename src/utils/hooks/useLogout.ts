import React from "react";
import { useDispatch } from "react-redux";
import { resetUser } from "../../redux/reducers/userReducer";
import { useNavigate } from "react-router";
import { resetLocation } from "../../redux/reducers/locationReducer";
import { resetDashboard } from "../../redux/reducers/dashboardReducer";
import { resetContactUs } from "../../redux/reducers/contactUsReducer";

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(resetUser());
    dispatch(resetLocation());
    dispatch(resetDashboard());
    dispatch(resetContactUs());
    navigate("/");
  };

  return { logout };
};

export default useLogout;
