import React from "react";
import SourceForm from "../../components/sourceForm/SourceForm";

const EditGardenWoodsAndFairy = () => {
  const breadCrumbsItems = [
    { name: "Home", to: "/dashboard" },
    { name: "Location", to: "/garden-woods" },
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

export default EditGardenWoodsAndFairy;
