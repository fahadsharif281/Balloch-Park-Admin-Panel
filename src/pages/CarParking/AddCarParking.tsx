import React from "react";
import BreadCrumbs from "../../components/common/BreadCrumbs/BreadCrumbs";
import AddForm from "../../components/addForm/AddForm";
import classes from "./AddCarParking.module.scss";

const AddCarParking = () => {
  const breadCrumbsItems = [
    { name: "Home", to: "/car-parking" },
    { name: "Add Location", to: "/car-parking/add" },
    { name: "Select Location", to: "/car-parking", active: true },
  ];
  return (
    <>
      <div className={classes.container}>
        <BreadCrumbs items={breadCrumbsItems} />
        <div className={classes.add_form_container}>
          <AddForm />
        </div>
      </div>
    </>
  );
};

export default AddCarParking;
