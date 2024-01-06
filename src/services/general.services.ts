import { IBooks } from "../models/IBooks";
import { IDashboardReducerAPIResponse } from "../models/IDashboardRedcuer";
import { ILoactionReducer } from "../models/ILocationReducer";
import { HTTP_CLIENT } from "../utils/config";

export const getAllRoutesOfSideBar = async (): Promise<any> => {
  return HTTP_CLIENT.get<IBooks>("/api/screen_type/getAll");
};

export const getAllLocationsByTypeApiCall = async (
  type: string
): Promise<any> => {
  return HTTP_CLIENT.get<ILoactionReducer>(
    `/api/location/getLocationByTypeWithOnePic/?type=${type}`
  );
};

export const getAllMapLocationsAPICall = async (): Promise<any> => {
  return HTTP_CLIENT.get<IDashboardReducerAPIResponse>(
    `/api/location/getAllLocations`
  );
};

export const postCreateLocationApiCall = async (params: any): Promise<any> => {
  return HTTP_CLIENT.post<any>(`/api/location/createLocation`, params, {
    headers: {
      "Content-Type":
        "multipart/form-data; boundary=----WebKitFormBoundarysBgfVbW7Z58abW4J",
    },
  });
};
