import DangerousWaters from "../pages/DangerousWaters/DangerousWaters";
import EntrancesAndExit from "../pages/EntrancesAndExit/EntrancesAndExit";
import FairyTrails from "../pages/FairyTrails/FairyTrails";
import GardenWoodsAndFairy from "../pages/GardenWoodsAndFairy/GardenWoodsAndFairy";
import History from "../pages/History/History";
import KidsPlay from "../pages/KidsPlay/KidsPlay";
import LifeBouys from "../pages/LifeBouys/LifeBouys";
import NatureTrails from "../pages/NatureTrails/NatureTrails";
import PicnicTables from "../pages/PicnicTables/PicnicTables";
import PointOfInterest from "../pages/PointOfInterest/PointOfInterest";
import Toiltes from "../pages/Toilets/Toiltes";
import Home from "../pages/home/Home";

export const userRoutesAll = [
  {
    to: "/car-parking",
    component: Home,
  },
  {
    to: "/nature-trails",
    component: NatureTrails,
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
    to: "/kids-play",
    component: KidsPlay,
  },
  {
    to: "/dangerous-waters",
    component: DangerousWaters,
  },
  {
    to: "/entrance-exit",
    component: EntrancesAndExit,
  },
  {
    to: "/toilets",
    component: Toiltes,
  },
  {
    to: "/picnic-tables",
    component: PicnicTables,
  },
  {
    to: "/fairy-trails",
    component: FairyTrails,
  },
  {
    to: "/park-and-castle",
    component: FairyTrails,
  },
  {
    to: "/view-points",
    component: FairyTrails,
  },
  {
    to: "/life-bouys",
    component: LifeBouys,
  },
  {
    to: "/point-of-interest",
    component: PointOfInterest,
  },
];
