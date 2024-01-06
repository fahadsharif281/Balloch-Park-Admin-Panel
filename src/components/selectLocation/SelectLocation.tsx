import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./SelectLocation.module.scss";
import CustomButton from "../common/Button/Button";
import AppGoogleMap from "../googleMap/AppGoogleMap";
import { useDispatch } from "react-redux";
import {
  setLatitude,
  setLongitude,
} from "../../redux/reducers/locationReducer";

const SelectLocation = ({
  to,
  heading,
  subHeading,
}: {
  to?: string;
  heading?: string;
  subHeading?: string;
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLatitude(null));
    dispatch(setLongitude(null));
  }, []);
  const navigate = useNavigate();
  const [showNext, setShowNext] = useState(false);
  return (
    <>
      <div className={classes.container}>
        <div className={classes.flex_container}>
          {heading && <p className={classes.heading}>{heading}</p>}
          {to && showNext && (
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
        {subHeading && <div className={classes.sub_heading}>{subHeading}</div>}
        <div className={classes.map_container}>
          <AppGoogleMap
            handleClickOnMap={(e) => {
              setShowNext(true);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SelectLocation;
