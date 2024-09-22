import AllOrderbyUser from "../../Pages/Dashboard/UserDashboard/AllOrders/AllOrderbyUser";
import UserDashboard from "../../Pages/Dashboard/UserDashboard/UserDashboard";

export const userRouteOption = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <UserDashboard></UserDashboard>,
  },
  {
    name: "All Orders",
    path: "orders-users",
    element: <AllOrderbyUser />,
  },
];
