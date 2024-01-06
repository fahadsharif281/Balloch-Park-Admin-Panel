import React from "react";
import { useDispatch } from "react-redux";
import { resetUser } from "../../redux/reducers/userReducer";
import { useNavigate } from "react-router";
import { resetLocation } from "../../redux/reducers/locationReducer";

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(resetUser());
    dispatch(resetLocation());
    navigate("/");
  };

  return { logout };
};

export default useLogout;
