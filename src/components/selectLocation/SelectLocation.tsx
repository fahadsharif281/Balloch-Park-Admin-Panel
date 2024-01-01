import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./SelectLocation.module.scss";
import CustomButton from "../common/Button/Button";

const SelectLocation = ({ to }: { to?: string }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={classes.container}>
        <div className={classes.flex_container}>
          <p className={classes.heading}>Click on map to pick location</p>
          {to && (
            <CustomButton
              onClick={() => {
                if (to) {
                  navigate(to);
                }
              }}
              containerClassName={classes.btn_container}
              text="Next"
            />
          )}
        </div>
        <div>map component</div>
      </div>
    </>
  );
};

export default SelectLocation;
