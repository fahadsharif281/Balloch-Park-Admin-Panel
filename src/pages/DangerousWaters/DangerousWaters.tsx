import React, { useEffect } from "react";
import DetailCard from "../../components/card/DetailCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllLocationsByType } from "../../redux/actions/locations.action";
import { LinearProgress } from "@mui/material";

const DangerousWaters = () => {
  const dispatch = useDispatch<any>();
  const { allLocations, isLoading } = useSelector(
    (state: any) => state.root.location
  );
  useEffect(() => {
    const params = {
      type: "entrance",
    };
    dispatch(getAllLocationsByType(params));
  }, []);
  return (
    <>
      <div>
        {!isLoading && (
          <DetailCard
            title="Dangerous Waters"
            addTo="/dangerous-waters/select-location"
            results={allLocations}
          />
        )}
      </div>
    </>
  );
};

export default DangerousWaters;
