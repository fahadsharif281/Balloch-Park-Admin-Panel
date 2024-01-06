import React from "react";
import SourceForm from "../../components/sourceForm/SourceForm";

const EditDangerousWaters = () => {
  const breadCrumbsItems = [
    { name: "Home", to: "/dashboard" },
    { name: "Location", to: "/dangerous-waters" },
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

export default EditDangerousWaters;
