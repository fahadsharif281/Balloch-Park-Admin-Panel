import React from "react";
import classes from "./PrivacyPolicy.module.scss";
import CustomButton from "../../components/common/Button/Button";
import BreadCrumbs from "../../components/common/BreadCrumbs/BreadCrumbs";

const PrivacyPolicy = () => {
  const breadCrumbsItems = [
    { name: "Home", to: "/dashboard" },
    { name: "Privacy Policy", to: "/privacy-policy", active: true },
  ];
  return (
    <>
      <BreadCrumbs items={breadCrumbsItems} />
      <p>Privacy Policy</p>
      <div className={classes.container}>
        <div></div>
        <CustomButton buttonClassName={classes.button} text="Save" />
      </div>
    </>
  );
};

export default PrivacyPolicy;
