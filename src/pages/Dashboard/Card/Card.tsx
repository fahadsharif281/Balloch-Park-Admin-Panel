import React from "react";
import classes from "./Card.module.scss";
const Card = ({
  heading,
  subheading,
}: {
  heading: string;
  subheading: string;
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.title}> {heading}</div>
        <h4 className={classes.subtitle}>{subheading}</h4>
      </div>
    </div>
  );
};

export default Card;
