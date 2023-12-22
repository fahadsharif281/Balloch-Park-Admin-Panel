import React from "react";
import { useDispatch } from "react-redux";
import { resetUser } from "../../redux/reducers/userReducer";

const useLogout = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(resetUser());
  };

  return { logout };
};

export default useLogout;
