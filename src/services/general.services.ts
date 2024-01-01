import { IBooks } from "../models/IBooks";
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
