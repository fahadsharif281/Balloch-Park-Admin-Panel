import React from "react";
import { useDispatch } from "react-redux";
import { resetUser } from "../../redux/reducers/userReducer";
import { useNavigate } from "react-router";

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(resetUser());
    navigate("/");
  };

  return { logout };
};

export default useLogout;
