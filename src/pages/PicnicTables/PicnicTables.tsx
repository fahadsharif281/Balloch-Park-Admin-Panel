import React, { useEffect } from "react";
import DetailCard from "../../components/card/DetailCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllLocationsByType } from "../../redux/actions/locations.action";
import { setSelectedLocation } from "../../redux/reducers/locationReducer";

const PicnicTables = () => {
  const dispatch = useDispatch<any>();
  const { allLocations, isLoading } = useSelector(
    (state: any) => state.root.location
  );
  useEffect(() => {
    const params = {
      type: "amenities",
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
            title="Picnic Tables"
            addTo="/picnic-tables/select-location"
            viewTo="/picnic-tables/view-details"
            editTo="/picnic-tables/edit-details"
          />
        </div>
      )}
    </>
  );
};

export default PicnicTables;
