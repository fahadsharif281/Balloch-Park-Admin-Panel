import React from "react";
import SourceForm from "../../components/sourceForm/SourceForm";

const EditParkAndCastle = () => {
  const breadCrumbsItems = [
    { name: "Home", to: "/dashboard" },
    { name: "Location", to: "/park-and-castle" },
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

export default EditParkAndCastle;
