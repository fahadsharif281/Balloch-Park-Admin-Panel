import React from "react";
import classes from "./TermandConditions.module.scss";
import CustomButton from "../../components/common/Button/Button";
import BreadCrumbs from "../../components/common/BreadCrumbs/BreadCrumbs";

const TermAndConditions = () => {
  const breadCrumbsItems = [
    { name: "Home", to: "/dashboard" },
    { name: "Term And Conditions", to: "/terms-and-conditions", active: true },
  ];
  return (
    <>
      <BreadCrumbs items={breadCrumbsItems} />
      <p>Term And Conditions</p>
      <div className={classes.container}>
        <div></div>
        <CustomButton buttonClassName={classes.button} text="Save" />
      </div>
    </>
  );
};

export default TermAndConditions;
