import React from "react";
import classes from "./AboutUs.module.scss";
import CustomButton from "../../components/common/Button/Button";
import BreadCrumbs from "../../components/common/BreadCrumbs/BreadCrumbs";

const AboutUs = () => {
  const breadCrumbsItems = [
    { name: "Home", to: "/dashboard" },
    { name: "About Us", to: "/about-us", active: true },
  ];
  return (
    <>
      <BreadCrumbs items={breadCrumbsItems} />
      <p>About Us</p>
      <div className={classes.container}>
        <div></div>
        <CustomButton buttonClassName={classes.button} text="Save" />
      </div>
    </>
  );
};

export default AboutUs;
