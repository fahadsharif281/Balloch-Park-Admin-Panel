import { useSelector } from "react-redux";
import Dashboard from "../../pages/Dashboard/Dashboard";
import { userRoutesAll } from "../../router/AllRoutes";
import dashboardImg from "../../assets/png/dashboard.png";
import contactUsImg from "../../assets/png/phoneIcon.png";
import ContactUs from "../../pages/ContactUs/ContactUs";

export const useRoutes = () => {
  const { routes } = useSelector((state: any) => state.root.user);
  const mergeUserRoutes = routes?.map((item: any, index: number) => {
    const mapping = userRoutesAll.find(
      (route: any) =>
        route?.screen_name?.trim()?.toLowerCase() ===
        item?.screen_name?.trim()?.toLowerCase()
    );
    if (mapping) {
      return {
        ...item,
        ...mapping,
      };
    } else {
      return item;
    }
  });
  const userRoutes = [
    {
      to: "/dashboard",
      component: Dashboard,
      image: dashboardImg,
      screen_name: "Dashboard",
    },
    ...mergeUserRoutes,
    {
      to: "/contact-us",
      component: ContactUs,
      image: contactUsImg,
      screen_name: "Contact us",
    },
  ];

  return { userRoutes };
};
