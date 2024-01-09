import React from "react";
import classes from "./ManageWelcomeScreen.module.scss";
import CustomButton from "../../components/common/Button/Button";
import BreadCrumbs from "../../components/common/BreadCrumbs/BreadCrumbs";
import FrontPageImg from "../../assets/png/FrontPage.png";
import { Input } from "../../components/common/Input/Input";
import { TextArea } from "../../components/common/TextArea/TextArea";

const ManageWelcomeScreen = () => {
  const breadCrumbsItems = [
    { name: "Home", to: "/dashboard" },
    { name: "Manage Welcome Screen", to: "/manage-titles", active: true },
  ];
  return (
    <>
      <BreadCrumbs items={breadCrumbsItems} />
      <p>Manage Welcome Screen</p>
      <div className={classes.main_container}>
        <div className={classes.container}>
          <Input label="Welcome Title:" type="text" />
          <Input label="Contact no:" type="text" />
          <TextArea label="Description" rows={3} />
          <CustomButton buttonClassName={classes.button} text="Save" />
        </div>
        <div className={classes.img}>
          <img
            src={FrontPageImg}
            height="100%"
            width="100%"
            alt="FrontPageImg"
          />
          <div className={classes.heading}>Welcome to BallochParkGuide</div>
          <div className={classes.subheading}>
            Your ultimate companion for exploring the breathtaking landscapes
            and hidden wonders of Balloch Castle Country Park, Loch Lomond.
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageWelcomeScreen;
