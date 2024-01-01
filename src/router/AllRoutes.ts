import AddCarParking from "../pages/CarParking/AddCarParking";
import AddCarParkingSelectLocation from "../pages/CarParking/AddCarParkingSelectLocation";
import CarParking from "../pages/CarParking/CarParking";
import EditCarParkingDetails from "../pages/CarParking/EditCarParkingDetails";
import ViewCarParkingDetails from "../pages/CarParking/ViewCarParkingDetails";
import AddDangerousWaters from "../pages/DangerousWaters/AddDangerousWaters";
import AddDangerousWatersSelectLocation from "../pages/DangerousWaters/AddDangerousWatersSelectLocation";
import DangerousWaters from "../pages/DangerousWaters/DangerousWaters";
import AddEntrancesAndExit from "../pages/EntrancesAndExit/AddEntrancesAndExit";
import AddEntrancesAndExitSelectLocation from "../pages/EntrancesAndExit/AddEntrancesAndExitSelectLocation";
import EntrancesAndExit from "../pages/EntrancesAndExit/EntrancesAndExit";
import AddFairyTrails from "../pages/FairyTrails/AddFairyTrails";
import AddFairyTrailsSelectLocation from "../pages/FairyTrails/AddFairyTrailsSelectLocation";
import FairyTrails from "../pages/FairyTrails/FairyTrails";
import AddGardenWoodsAndFairy from "../pages/GardenWoodsAndFairy/AddGardenWoodsAndFairy";
import AddGardenWoodsAndFairySelectLocation from "../pages/GardenWoodsAndFairy/AddGardenWoodsAndFairySelectLocation";
import GardenWoodsAndFairy from "../pages/GardenWoodsAndFairy/GardenWoodsAndFairy";
import AddHistory from "../pages/History/AddHistory";
import AddHistorySelectLocation from "../pages/History/AddHistorySelectLocation";
import History from "../pages/History/History";
import AddKidsPlay from "../pages/KidsPlay/AddKidsPlay";
import AddKidsPlaySelectLocation from "../pages/KidsPlay/AddKidsPlaySelectLocation";
import KidsPlay from "../pages/KidsPlay/KidsPlay";
import AddLifeBouys from "../pages/LifeBouys/AddLifeBouys";
import AddLifeBouysSelectLocation from "../pages/LifeBouys/AddLifeBouysSelectLocation";
import LifeBouys from "../pages/LifeBouys/LifeBouys";
import AddNatureTrails from "../pages/NatureTrails/AddNatureTrails";
import AddNatureTrailsSelectLocation from "../pages/NatureTrails/AddNatureTrailsSelectLocation";
import NatureTrails from "../pages/NatureTrails/NatureTrails";
import AddParkAndCastle from "../pages/ParkAndCastle/AddParkAndCastle";
import AddParkAndCastleSelectLocation from "../pages/ParkAndCastle/AddParkAndCastleSelectLocation";
import ParkAndCastle from "../pages/ParkAndCastle/ParkAndCastle";
import AddPicnicTables from "../pages/PicnicTables/AddPicnicTables";
import AddPicnicTablesSelectLocation from "../pages/PicnicTables/AddPicnicTablesSelectLocation";
import PicnicTables from "../pages/PicnicTables/PicnicTables";
import AddPointOfInterest from "../pages/PointOfInterest/AddPointOfInterest";
import AddPointOfInterestSelectLocation from "../pages/PointOfInterest/AddPointOfInterestSelectLocation";
import PointOfInterest from "../pages/PointOfInterest/PointOfInterest";
import AddToiltes from "../pages/Toilets/AddToiltes";
import AddToiltesSelectLocation from "../pages/Toilets/AddToiltesSelectLocation";
import Toiltes from "../pages/Toilets/Toiltes";
import AddViewPoints from "../pages/ViewPoints/AddViewPoints";
import AddViewPointsSelectLocation from "../pages/ViewPoints/AddViewPointsSelectLocation";
import ViewPoints from "../pages/ViewPoints/ViewPoints";

export const userRoutesAll = [
  {
    to: "/entrance-exit",
    component: EntrancesAndExit,
    screen_name: "Entrances & Exits",
    add_to: "/entrance-exit/select-location/add-form",
    add_component: AddEntrancesAndExit,
    select_location_to: "/entrance-exit/select-location",
    select_location_component: AddEntrancesAndExitSelectLocation,
    edit_to: "/entrance-exit/edit",
    edit_component: EntrancesAndExit,
  },
  {
    to: "/car-parking",
    component: CarParking,
    screen_name: "Car Parking",
    add_to: "/car-parking/select-location/add-form",
    add_component: AddCarParking,
    select_location_to: "/car-parking/select-location",
    select_location_component: AddCarParkingSelectLocation,
    edit_to: "/car-parking/edit-details",
    edit_component: EditCarParkingDetails,
    view_to: "/car-parking/view-details",
    view_component: ViewCarParkingDetails,
  },
  {
    to: "/toilets",
    component: Toiltes,
    screen_name: "Toilets",
    add_to: "/toilets/select-location/add-form",
    add_component: AddToiltes,
    select_location_to: "/toilets/select-location",
    select_location_component: AddToiltesSelectLocation,
    edit_to: "/toilets/edit",
    edit_component: EntrancesAndExit,
  },
  {
    to: "/park-and-castle",
    component: ParkAndCastle,
    screen_name: "Balloch Park & Castle",
    add_to: "/park-and-castle/select-location/add-form",
    add_component: AddParkAndCastle,
    select_location_to: "/park-and-castle/select-location",
    select_location_component: AddParkAndCastleSelectLocation,
    edit_to: "/park-and-castle/edit",
    edit_component: EntrancesAndExit,
  },
  {
    to: "/garden-woods",
    component: GardenWoodsAndFairy,
    screen_name: "Gardens, Woods & Fairy Glen",
    add_to: "/garden-woods/select-location/add-form",
    add_component: AddGardenWoodsAndFairy,
    select_location_to: "/garden-woods/select-location",
    select_location_component: AddGardenWoodsAndFairySelectLocation,
    edit_to: "/garden-woods/edit",
    edit_component: EntrancesAndExit,
  },
  {
    to: "/history",
    component: History,
    screen_name: "History",
    add_to: "/history/select-location/add-form",
    add_component: AddHistory,
    select_location_to: "/history/select-location",
    select_location_component: AddHistorySelectLocation,
    edit_to: "/history/edit",
    edit_component: EntrancesAndExit,
  },
  {
    to: "/nature-trails",
    component: NatureTrails,
    screen_name: "Nature Trails & Walks",
    add_to: "/nature-trails/select-location/add-form",
    add_component: AddNatureTrails,
    select_location_to: "/nature-trails/select-location",
    select_location_component: AddNatureTrailsSelectLocation,
    edit_to: "/nature-trails/edit",
    edit_component: EntrancesAndExit,
  },
  {
    to: "/view-points",
    component: ViewPoints,
    screen_name: "Viewpoints",
    add_to: "/view-points/select-location/add-form",
    add_component: AddViewPoints,
    select_location_to: "/view-points/select-location",
    select_location_component: AddViewPointsSelectLocation,
    edit_to: "/view-points/edit",
    edit_component: EntrancesAndExit,
  },
  {
    to: "/picnic-tables",
    component: PicnicTables,
    screen_name: "Picnic Tables",
    add_to: "/picnic-tables/select-location/add-form",
    add_component: AddPicnicTables,
    select_location_to: "/picnic-tables/select-location",
    select_location_component: AddPicnicTablesSelectLocation,
    edit_to: "/picnic-tables/edit",
    edit_component: EntrancesAndExit,
  },
  {
    to: "/kids-play",
    component: KidsPlay,
    screen_name: "Kids Play Areas",
    add_to: "/kids-play/select-location/add-form",
    add_component: AddKidsPlay,
    select_location_to: "/kids-play/select-location",
    select_location_component: AddKidsPlaySelectLocation,
    edit_to: "/kids-play/edit",
    edit_component: EntrancesAndExit,
  },
  {
    to: "/fairy-trails",
    component: FairyTrails,
    screen_name: "The Fairy Trail",
    add_to: "/fairy-trails/select-location/add-form",
    add_component: AddFairyTrails,
    select_location_to: "/fairy-trails/select-location",
    select_location_component: AddFairyTrailsSelectLocation,
    edit_to: "/fairy-trails/edit",
    edit_component: EntrancesAndExit,
  },
  {
    to: "/point-of-interest",
    component: PointOfInterest,
    screen_name: "Points of Interest",
    add_to: "/point-of-interest/select-location/add-form",
    add_component: AddPointOfInterest,
    select_location_to: "/point-of-interest/select-location",
    select_location_component: AddPointOfInterestSelectLocation,
    edit_to: "/point-of-interest/edit",
    edit_component: EntrancesAndExit,
  },
  {
    to: "/dangerous-waters",
    component: DangerousWaters,
    screen_name: "Dangerous Waters",
    add_to: "/dangerous-waters/select-location/add-form",
    add_component: AddDangerousWaters,
    select_location_to: "/dangerous-waters/select-location",
    select_location_component: AddDangerousWatersSelectLocation,
    edit_to: "/dangerous-waters/edit",
    edit_component: EntrancesAndExit,
  },
  {
    to: "/life-bouys",
    component: LifeBouys,
    screen_name: " Lifebouys",
    add_to: "/life-bouys/select-location/add-form",
    add_component: AddLifeBouys,
    select_location_to: "/life-bouys/select-location",
    select_location_component: AddLifeBouysSelectLocation,
    edit_to: "/life-bouys/edit",
    edit_component: EntrancesAndExit,
  },
];
