import React from "react";
import SourceForm from "../../components/sourceForm/SourceForm";

const EditHistory = () => {
  const breadCrumbsItems = [
    { name: "Home", to: "/dashboard" },
    { name: "Location", to: "/history" },
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

export default EditHistory;
