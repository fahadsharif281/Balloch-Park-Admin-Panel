import React, { useState } from "react";
import classes from "./AddForm.module.scss";
import { Input } from "../common/Input/Input";
import CustomButton from "../common/Button/Button";
import TimePicker from "../common/TimePicker/TimePicker";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toBase64 } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";

const AddForm = ({
  handleSubmit = () => {},
  changeLocationTo,
}: {
  handleSubmit: (values: any) => void;
  changeLocationTo?: string;
}) => {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const formik = useFormik({
    initialValues: {
      locationName: "",
      locationDetail: "",
      locationDistance: "",
      locationAverageTime: "",
      latitude: "31231.312312",
      longitute: "-3123.321312",
      imageFile: "",
    },
    validationSchema: Yup.object().shape({
      locationName: Yup.string().required("Location name is required"),
    }),
    onSubmit: handleSubmit,
  });
  const handleFileUpload = async (e: any) => {
    if (e.target.files) {
      formik.setFieldValue("imageFile", e.target.files[0]);
      const result: any = await toBase64(e.target.files[0]);
      if (result) {
        setImage(result);
      }
    }
  };
  return (
    <>
      <div className={classes.container}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
        >
          <p className={classes.heading}>Fill all fields to continue</p>
          <p className={classes.title}>Add Car Parking Route</p>
          <div className={classes.upload_image_container}>
            <p className={classes.upload_image}>Click to select Image</p>
            <Input type="file" onChange={handleFileUpload} />
          </div>
          {image && (
            <div className={classes.image_conatiner}>
              <p className={classes.title}>Selected files:</p>
              <div className={classes.img_flex}>
                <img src={image} />
              </div>
            </div>
          )}
          <Input
            type="text"
            value={formik.values.locationName}
            onChange={formik.handleChange("locationName")}
            onBlur={formik.handleBlur("locationName")}
            error={
              formik.touched.locationName && formik.errors.locationName
                ? formik.errors.locationName
                : ""
            }
            placeholder="Enter Location Name"
          />
          <Input
            type="text"
            onChange={formik.handleChange("locationDetail")}
            value={formik.values.locationDetail}
            placeholder="Enter Location Detail"
          />
          <Input
            type="text"
            onChange={formik.handleChange("locationDistance")}
            value={formik.values.locationDistance}
            placeholder="Enter Location Distance (km)"
          />
          <TimePicker
            title="Location Average Time :"
            onChange={(e) => {
              formik.setFieldValue("locationAverageTime", e?.$d);
            }}
            isClearAble={true}
            onClear={() => {
              formik.setFieldValue("locationAverageTime", "");
            }}
            value={formik.values.locationAverageTime}
          />
          <div className={classes.location_conatiner}>
            <Input
              type="text"
              value={formik.values.latitude}
              onChange={formik.handleChange("latitude")}
              disabled
              label="Latitude"
            />
            <Input
              type="text"
              disabled
              label="Longitute"
              onChange={formik.handleChange("longitute")}
              value={formik.values.longitute}
            />
            <CustomButton
              onClick={() => {
                if (changeLocationTo) {
                  navigate(changeLocationTo);
                }
              }}
              containerClassName={classes.btn_container}
              buttonClassName={classes.btn_location}
              text="Change Location"
            />
          </div>
          <div className={classes.add_btn_flex}>
            <CustomButton
              type="submit"
              containerClassName={classes.add_button_container}
              text="Add"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddForm;