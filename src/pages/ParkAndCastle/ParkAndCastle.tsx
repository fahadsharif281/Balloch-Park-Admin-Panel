import React, { useEffect } from "react";
import DetailCard from "../../components/card/DetailCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllLocationsByType } from "../../redux/actions/locations.action";

const ParkAndCastle = () => {
  const dispatch = useDispatch<any>();
  const { allLocations, isLoading } = useSelector(
    (state: any) => state.root.location
  );
  useEffect(() => {
    const params = {
      type: "toilet",
    };
    dispatch(getAllLocationsByType(params));
  }, []);
  return (
    <>
      {!isLoading && (
        <div>
          <DetailCard
            results={allLocations}
            title="Balloch Park & Castle"
            addTo="/park-and-castle/select-location"
            viewTo="/park-and-castle/view-details"
            editTo="/park-and-castle/edit-details"
          />
        </div>
      )}
    </>
  );
};

export default ParkAndCastle;
