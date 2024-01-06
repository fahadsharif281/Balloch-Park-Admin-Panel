import { useEffect, useState } from "react";
import Card from "./Card/Card";
import classes from "./Dashboard.module.scss";
import AppGoogleMap from "../../components/googleMap/AppGoogleMap";
import { useDispatch, useSelector } from "react-redux";
import { getAllMapLocations } from "../../redux/actions/dashboard.action";
const Dashboard = () => {
  const dispatch = useDispatch<any>();
  const { allMapLocations } = useSelector((state: any) => state.root.dashboard);
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
  useEffect(() => {
    dispatch(getAllMapLocations());
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.mainheading}>Dashboard</div>
      <div className={classes.card_section}>
        {cardContent?.map((item, index) => {
          return (
            <>
              <Card
                id={index.toString()}
                heading={item.heading}
                subheading={item.subheading}
              />
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
        <div className={classes.locations_container}>
          {focus === "graph" ? (
            <>Graph</>
          ) : (
            <>
              <AppGoogleMap allMapLocations={allMapLocations} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
