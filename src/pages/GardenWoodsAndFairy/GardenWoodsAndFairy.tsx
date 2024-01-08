import React, { useEffect } from "react";
import DetailCard from "../../components/card/DetailCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllLocationsByType } from "../../redux/actions/locations.action";
import { setSelectedLocation } from "../../redux/reducers/locationReducer";

const GardenWoodsAndFairy = () => {
  const dispatch = useDispatch<any>();
  const { allLocations, isLoading } = useSelector(
    (state: any) => state.root.location
  );
  useEffect(() => {
    const params = {
      type: "view_point",
    };
    dispatch(setSelectedLocation(""));
    dispatch(getAllLocationsByType(params));
  }, []);
  return (
    <>
      {!isLoading && (
        <div>
          <DetailCard
            results={allLocations}
            title="Gardens, Woods & Fairy Glen"
            addTo="/garden-woods/select-location"
            viewTo="/garden-woods/view-details"
            editTo="/garden-woods/edit-details"
          />
        </div>
      )}
    </>
  );
};

export default GardenWoodsAndFairy;
