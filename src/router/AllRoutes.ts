import CarParking from "../pages/CarParking/CarParking";
import DangerousWaters from "../pages/DangerousWaters/DangerousWaters";
import EntrancesAndExit from "../pages/EntrancesAndExit/EntrancesAndExit";
import FairyTrails from "../pages/FairyTrails/FairyTrails";
import GardenWoodsAndFairy from "../pages/GardenWoodsAndFairy/GardenWoodsAndFairy";
import History from "../pages/History/History";
import KidsPlay from "../pages/KidsPlay/KidsPlay";
import LifeBouys from "../pages/LifeBouys/LifeBouys";
import NatureTrails from "../pages/NatureTrails/NatureTrails";
import ParkAndCastle from "../pages/ParkAndCastle/ParkAndCastle";
import PicnicTables from "../pages/PicnicTables/PicnicTables";
import PointOfInterest from "../pages/PointOfInterest/PointOfInterest";
import Toiltes from "../pages/Toilets/Toiltes";
import ViewPoints from "../pages/ViewPoints/ViewPoints";

export const userRoutesAll = [
  {
    to: "/entrance-exit",
    component: EntrancesAndExit,
  },
  {
    to: "/car-parking",
    component: CarParking,
  },
  {
    to: "/toilets",
    component: Toiltes,
  },
  {
    to: "/park-and-castle",
    component: ParkAndCastle,
  },
  {
    to: "/garden-woods",
    component: GardenWoodsAndFairy,
  },
  {
    to: "/history",
    component: History,
  },
  {
    to: "/nature-trails",
    component: NatureTrails,
  },
  {
    to: "/view-points",
    component: ViewPoints,
  },
  {
    to: "/picnic-tables",
    component: PicnicTables,
  },
  {
    to: "/kids-play",
    component: KidsPlay,
  },

  {
    to: "/fairy-trails",
    component: FairyTrails,
  },
  {
    to: "/point-of-interest",
    component: PointOfInterest,
  },
  {
    to: "/dangerous-waters",
    component: DangerousWaters,
  },
  {
    to: "/life-bouys",
    component: LifeBouys,
  },
];
