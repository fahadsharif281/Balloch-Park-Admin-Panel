import React from "react";
import BreadCrumbs from "../../components/common/BreadCrumbs/BreadCrumbs";
import SelectLocation from "../../components/selectLocation/SelectLocation";

const AddHistorySelectLocation = () => {
  const breadCrumbsItems = [
    { name: "Home", to: "/dashboard" },
    { name: "Add Location", to: "" },
    {
      name: "Select Location",
      to: "",
      active: true,
    },
  ];
  return (
    <>
      <div>
        <BreadCrumbs items={breadCrumbsItems} />
        <SelectLocation to="/history/select-location/add-form" />
      </div>
    </>
  );
};

export default AddHistorySelectLocation;
