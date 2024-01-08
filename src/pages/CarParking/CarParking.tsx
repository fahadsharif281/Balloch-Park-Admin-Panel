import React, { useEffect } from "react";
import DetailCard from "../../components/card/DetailCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllLocationsByType } from "../../redux/actions/locations.action";
import { setSelectedLocation } from "../../redux/reducers/locationReducer";

const CarParking = () => {
  const dispatch = useDispatch<any>();
  const { allLocations, isLoading } = useSelector(
    (state: any) => state.root.location
  );
  useEffect(() => {
    const params = {
      type: "dog-walk",
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
            title="Car Parking"
            addTo="/car-parking/select-location"
            viewTo="/car-parking/view-details"
            editTo="/car-parking/edit-details"
          />
        </div>
      )}
    </>
  );
};

export default CarParking;
