import { useState } from "react";
import Card from "./Card/Card";
import classes from "./Dashboard.module.scss";

const Dashboard = () => {
  const [focus, setFocus] = useState("graph");
  const cardContent = [
    {
      heading: "Total Users",
      subheading: "1103",
    },
    {
      heading: "Total Walking Route",
      subheading: "5",
    },
    {
      heading: "Total Dog Walk",
      subheading: "5",
    },
    {
      heading: "Total Toilet",
      subheading: "2",
    },
  ];
  return (
    <div className={classes.container}>
      <div className={classes.mainheading}>Dashboard</div>
      <div className={classes.card_section}>
        {cardContent?.map((item) => {
          return (
            <>
              <Card heading={item.heading} subheading={item.subheading} />
            </>
          );
        })}
      </div>
      <div className={classes.location_section}>
        <div className={classes.main_heading}>
          <div className={classes.sub_heading}>All Locations</div>
          <div className={classes.button_section}>
            <button
              onClick={() => setFocus("graph")}
              className={
                focus === "graph" ? classes.focus_button : classes.button
              }
            >
              Graph
            </button>
            <button
              onClick={() => setFocus("map")}
              className={
                focus === "map" ? classes.focus_button : classes.button
              }
            >
              Map
            </button>
          </div>
        </div>
        <div>{focus === "graph" ? <div>Graph</div> : <div>Map</div>}</div>
      </div>
    </div>
  );
};

export default Dashboard;
