import { IBooks } from "../models/IBooks";
import { HTTP_CLIENT } from "../utils/config";

export const getAllRoutesOfSideBar = async (): Promise<any> => {
  return HTTP_CLIENT.get<IBooks>("/api/screen_type/getAll");
};
