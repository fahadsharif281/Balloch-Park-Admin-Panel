import React from "react";
import SourceForm from "../../components/sourceForm/SourceForm";
import SelectLocation from "../../components/selectLocation/SelectLocation";

const ViewCarParkingDetails = () => {
  const breadCrumbsItems = [
    { name: "Home", to: "/dashboard" },
    { name: "Location", to: "/car-parking" },
    {
      name: "View Location",
      to: "",
      active: true,
    },
  ];
  return (
    <>
      <SourceForm
        breadCrumbsItems={breadCrumbsItems}
        handleSubmit={() => {}}
        formType="view"
      />
    </>
  );
};

export default ViewCarParkingDetails;
