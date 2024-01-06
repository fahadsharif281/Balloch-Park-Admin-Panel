import React, { useEffect } from "react";
import DetailCard from "../../components/card/DetailCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllLocationsByType } from "../../redux/actions/locations.action";

const LifeBouys = () => {
  const dispatch = useDispatch<any>();
  const { allLocations, isLoading } = useSelector(
    (state: any) => state.root.location
  );
  useEffect(() => {
    const params = {
      type: "walking-route",
    };
    dispatch(getAllLocationsByType(params));
  }, []);
  return (
    <>
      {!isLoading && (
        <div>
          <DetailCard
            results={allLocations}
            title="Lifebouys"
            addTo="/life-bouys/select-location"
            viewTo="/life-bouys/view-details"
            editTo="/life-bouys/edit-details"
          />
        </div>
      )}
    </>
  );
};

export default LifeBouys;
