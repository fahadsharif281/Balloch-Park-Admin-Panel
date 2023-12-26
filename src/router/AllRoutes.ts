import AddCarParking from "../pages/CarParking/AddCarParking";
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
    screen_name: "Entrances & Exits",
    add_to: "/entrance-exit/add",
    add_component: EntrancesAndExit,
    edit_to: "/entrance-exit/edit",
    edit_component: EntrancesAndExit,
  },
  {
    to: "/car-parking",
    component: CarParking,
    screen_name: "Car Parking",
    add_to: "/car-parking/add",
    add_component: AddCarParking,
    edit_to: "/car-parking/edit",
    edit_component: EntrancesAndExit,
  },
  {
    to: "/toilets",
    component: Toiltes,
    screen_name: "Toilets",
    add_to: "/toilets/add",
    add_component: EntrancesAndExit,
    edit_to: "/toilets/edit",
    edit_component: EntrancesAndExit,
  },
  {
    to: "/park-and-castle",
    component: ParkAndCastle,
    screen_name: "Balloch Park & Castle",
    add_to: "/park-and-castle/add",
    add_component: EntrancesAndExit,
    edit_to: "/park-and-castle/edit",
    edit_component: EntrancesAndExit,
  },
  {
    to: "/garden-woods",
    component: GardenWoodsAndFairy,
    screen_name: "Gardens, Woods & Fairy Glen",
    add_to: "/garden-woods/add",
    add_component: EntrancesAndExit,
    edit_to: "/garden-woods/edit",
    edit_component: EntrancesAndExit,
  },
  {
    to: "/history",
    component: History,
    screen_name: "History",
    add_to: "/history/add",
    add_component: EntrancesAndExit,
    edit_to: "/history/edit",
    edit_component: EntrancesAndExit,
  },
  {
    to: "/nature-trails",
    component: NatureTrails,
    screen_name: "Nature Trails & Walks",
    add_to: "/nature-trails/add",
    add_component: EntrancesAndExit,
    edit_to: "/nature-trails/edit",
    edit_component: EntrancesAndExit,
  },
  {
    to: "/view-points",
    component: ViewPoints,
    screen_name: "Viewpoints",
    add_to: "/view-points/add",
    add_component: EntrancesAndExit,
    edit_to: "/view-points/edit",
    edit_component: EntrancesAndExit,
  },
  {
    to: "/picnic-tables",
    component: PicnicTables,
    screen_name: "Picnic Tables",
    add_to: "/epicnic-tables/add",
    add_component: EntrancesAndExit,
    edit_to: "/epicnic-tables/edit",
    edit_component: EntrancesAndExit,
  },
  {
    to: "/kids-play",
    component: KidsPlay,
    screen_name: "Kids Play Areas",
    add_to: "/kids-play/add",
    add_component: EntrancesAndExit,
    edit_to: "/kids-play/edit",
    edit_component: EntrancesAndExit,
  },
  {
    to: "/fairy-trails",
    component: FairyTrails,
    screen_name: "The Fairy Trail",
    add_to: "/fairy-trails/add",
    add_component: EntrancesAndExit,
    edit_to: "/fairy-trails/edit",
    edit_component: EntrancesAndExit,
  },
  {
    to: "/point-of-interest",
    component: PointOfInterest,
    screen_name: "Points of Interest",
    add_to: "/point-of-interest/add",
    add_component: EntrancesAndExit,
    edit_to: "/point-of-interest/edit",
    edit_component: EntrancesAndExit,
  },
  {
    to: "/dangerous-waters",
    component: DangerousWaters,
    screen_name: "Dangerous Waters",
    add_to: "/dangerous-waters/add",
    add_component: EntrancesAndExit,
    edit_to: "/dangerous-waters/edit",
    edit_component: EntrancesAndExit,
  },
  {
    to: "/life-bouys",
    component: LifeBouys,
    screen_name: " Lifebouys",
    add_to: "/life-bouys/add",
    add_component: EntrancesAndExit,
    edit_to: "/life-bouys/edit",
    edit_component: EntrancesAndExit,
  },
];
