import { useSelector } from "react-redux";
import Dashboard from "../../pages/Dashboard/Dashboard";
import { userRoutesAll } from "../../router/AllRoutes";
import dashboardImg from "../../assets/png/dashboard.png";

export const useRoutes = () => {
  const { routes } = useSelector((state: any) => state.root.user);
  const mergeUserRoutes = routes.map((item: any, index: number) => ({
    ...item,
    ...userRoutesAll[index],
  }));
  const userRoutes = [
    {
      to: "/dashboard",
      component: Dashboard,
      image: dashboardImg,
      screen_name: "Dashboard",
    },
    ...mergeUserRoutes,
  ];

  return { userRoutes };
};