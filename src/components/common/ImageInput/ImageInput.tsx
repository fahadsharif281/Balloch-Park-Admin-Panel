import React, { ReactNode } from "react";
import { Input } from "../Input/Input";
import classes from "./ImageInput.module.scss";
import { IImageInput } from "../../../models/common/IInputProps";

const ImageInput = ({
  handleFileUpload = () => {},
  placeHolder,
  label,
  labelClassName,
  ...props
}: IImageInput) => {
  let labelClass = classes.label;
  if (labelClassName) {
    labelClass = `${labelClass} ${labelClassName}`;
  }
  return (
    <>
      {label && <p className={labelClass}>{label}</p>}
      <div className={classes.upload_image_container}>
        {placeHolder && <p className={classes.upload_image}>{placeHolder}</p>}
        <Input type="file" onChange={handleFileUpload} {...props} />
      </div>
    </>
  );
};

export default ImageInput;
