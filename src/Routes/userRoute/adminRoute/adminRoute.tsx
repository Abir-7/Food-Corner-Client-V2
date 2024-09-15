import AddItem from "../../../Pages/AdminDashboard/AddItem";
import AdminDashboard from "../../../Pages/AdminDashboard/dashboard/AdminDashboard";
import Allorders from "../../../Pages/AdminDashboard/Allorders";
import ManageItem from "../../../Pages/AdminDashboard/ManageItem";
import PendingOrders from "../../../Pages/AdminDashboard/PendingOrders";

export const adminRouteOption = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Menu Management",
    children: [
      {
        name: "Add Item",
        path: "add-item",
        element: <AddItem />,
      },
      {
        name: "Manage Item",
        path: "manage-item",
        element: <ManageItem />,
      },
    ],
  },
  {
    name: "Order Management",
    children: [
      {
        name: "All Orders",
        path: "all-oders",
        element: <Allorders />,
      },
      {
        name: "Pending Orders",
        path: "pending-orders",
        element: <PendingOrders />,
      },
    ],
  },
];
