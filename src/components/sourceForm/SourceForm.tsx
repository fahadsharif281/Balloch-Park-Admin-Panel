import classes from "./SourceForm.module.scss";
import BreadCrumbs from "../common/BreadCrumbs/BreadCrumbs";
import SelectLocation from "../selectLocation/SelectLocation";
import ImageInput from "../common/ImageInput/ImageInput";
import { Input } from "../common/Input/Input";
import { useFormik } from "formik";
import CustomButton from "../common/Button/Button";
import { IBreadCrumbsItems } from "../../models/common/IBreadCrumbs";
import { TextArea } from "../common/TextArea/TextArea";
import { useState } from "react";
import { toBase64 } from "../../utils/helpers";

const SourceForm = ({
  handleSubmit = () => {},
  breadCrumbsItems,
  formType,
}: {
  handleSubmit: (e: any) => void;
  breadCrumbsItems?: IBreadCrumbsItems[];
  formType: string;
}) => {
  const [image, setImage] = useState("");
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      distance: "",
      averageTime: "",
      capacity: "",
      imageFile: "",
    },
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
      {breadCrumbsItems && <BreadCrumbs items={breadCrumbsItems} />}
      <div className={classes.container}>
        <div className={classes.location_container}>
          <SelectLocation />
        </div>
        <div className={classes.submit_form}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
          >
            <div
              className={
                formType === "view" ? classes.image_file_container : ""
              }
            >
              <ImageInput
                label="Image"
                placeHolder="Click to select Image"
                handleFileUpload={handleFileUpload}
              />
            </div>
            {formType === "edit" && image && (
              <div className={classes.image_conatiner}>
                <p className={classes.title}>Selected file:</p>
                <div className={classes.img_flex}>
                  <img src={image} />
                </div>
              </div>
            )}
            <Input
              type="text"
              value={formik.values.title}
              onChange={formik.handleChange("title")}
              onBlur={formik.handleBlur("title")}
              error={
                formik.touched.title && formik.errors.title
                  ? formik.errors.title
                  : ""
              }
              placeholder="Enter Location Name"
              label="Title"
            />
            <TextArea
              rows={3}
              value={formik.values.description}
              onChange={formik.handleChange("description")}
              onBlur={formik.handleBlur("description")}
              error={
                formik.touched.description && formik.errors.description
                  ? formik.errors.description
                  : ""
              }
              placeholder="Enter Location Detail"
              label="Description"
            />
            <Input
              type="text"
              value={formik.values.distance}
              onChange={formik.handleChange("distance")}
              onBlur={formik.handleBlur("distance")}
              error={
                formik.touched.distance && formik.errors.distance
                  ? formik.errors.distance
                  : ""
              }
              placeholder="Enter Location Distance"
              label="Distance"
            />
            <Input
              type="text"
              value={formik.values.averageTime}
              onChange={formik.handleChange("averageTime")}
              onBlur={formik.handleBlur("averageTime")}
              error={
                formik.touched.averageTime && formik.errors.averageTime
                  ? formik.errors.averageTime
                  : ""
              }
              placeholder="Enter Location Average Time"
              label="Average Time"
            />
            {formType === "view" && (
              <Input
                type="text"
                value={formik.values.capacity}
                onChange={formik.handleChange("capacity")}
                onBlur={formik.handleBlur("capacity")}
                error={
                  formik.touched.capacity && formik.errors.capacity
                    ? formik.errors.capacity
                    : ""
                }
                placeholder="Enter Location Name"
                label="Capacity"
              />
            )}
            {formType === "edit" && (
              <div className={classes.btn_container}>
                <CustomButton
                  containerClassName={classes.update_btn_container_class}
                  buttonClassName={classes.btn_class}
                  text="Update"
                  type="submit"
                />
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default SourceForm;
