import React from "react";
import BreadCrumbs from "../../components/common/BreadCrumbs/BreadCrumbs";
import AddForm from "../../components/addForm/AddForm";
import classes from "./AddViewPoints.module.scss";

const AddViewPoints = () => {
  const breadCrumbsItems = [
    { name: "Home", to: "/dashboard" },
    { name: "Add Location", to: "" },
    { name: "Select Location", to: "/view-points/select-location" },
    { name: "Add Details", to: "", active: true },
  ];
  const handleSubmit = (values: any) => {
    console.log("submit values:", values);
  };
  return (
    <>
      <div className={classes.container}>
        <BreadCrumbs items={breadCrumbsItems} />
        <div className={classes.add_form_container}>
          <AddForm
            changeLocationTo="/view-points/select-location"
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default AddViewPoints;
