const BASE_URL = process.env.REACT_APP_BASE_URL;

const ENDPOINTS = {
  GETACTIVECOMPAIGN: "getActiveCompaign",
  GETSUCCESSCOMPAIGN: "getSuccessfullCompaign",
  CREATEDONATION: "createDonation",
  CURRENCY: "currency",
};

export const sorting = (a: any, b: any) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};

export { BASE_URL, ENDPOINTS };
