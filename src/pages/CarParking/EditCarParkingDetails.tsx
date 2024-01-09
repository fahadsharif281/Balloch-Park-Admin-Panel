import React from "react";
import SourceForm from "../../components/sourceForm/SourceForm";
import { postEditLocationApiCall } from "../../services/general.services";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const EditCarParkingDetails = () => {
  const { selectedLocation, longitude, latitude } = useSelector(
    (state: any) => state.root.location
  );
  const navigate = useNavigate();
  const breadCrumbsItems = [
    { name: "Home", to: "/dashboard" },
    { name: "Location", to: "/car-parking" },
    {
      name: "Edit Location",
      to: "",
      active: true,
    },
  ];
  const handleSubmit = (values: any) => {
    let form = new FormData();
    form.append("type", values?.type);
    form.append("location_id", values?.locationId);
    form.append(
      "long",
      latitude ? latitude : selectedLocation?.location?.coordinates[0]
    );
    form.append(
      "lat",
      longitude ? longitude : selectedLocation?.location?.coordinates[1]
    );
    form.append("title", values?.title);
    form.append("description", values?.description);
    form.append("distance", values?.distance);
    form.append("avg_time", values?.averageTime);
    form.append("parking_capacity", values?.capacity);
    postEditLocationApiCall(form).then((res) => {
      navigate("/car-parking");
    });
  };
  return (
    <>
      <SourceForm
        breadCrumbsItems={breadCrumbsItems}
        handleSubmit={handleSubmit}
        formType="edit"
      />
    </>
  );
};

export default EditCarParkingDetails;
