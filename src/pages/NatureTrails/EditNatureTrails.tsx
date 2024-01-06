import React from "react";
import SourceForm from "../../components/sourceForm/SourceForm";

const EditNatureTrails = () => {
  const breadCrumbsItems = [
    { name: "Home", to: "/dashboard" },
    { name: "Location", to: "/nature-trails" },
    {
      name: "Edit Location",
      to: "",
      active: true,
    },
  ];
  return (
    <>
      <SourceForm
        breadCrumbsItems={breadCrumbsItems}
        handleSubmit={() => {}}
        formType="edit"
      />
    </>
  );
};

export default EditNatureTrails;
