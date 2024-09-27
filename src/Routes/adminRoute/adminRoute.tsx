import PendingOrders from "../../Pages/Dashboard/AdminDashboard/PendingOrders/PendingOrders";
import AdminDashboard from "../../Pages/Dashboard/AdminDashboard/AdminDashboard";
import AddItem from "../../Pages/Dashboard/AdminDashboard/AddItem/AddItem";
import ManageItem from "../../Pages/Dashboard/AdminDashboard/ManageItems/ManageItem";
import Allorders from "../../Pages/Dashboard/AdminDashboard/AllOrders/Allorders";
import AddCusineCategory from "../../Pages/Dashboard/AdminDashboard/AddCuisineCategory/AddCusineCategory";
import { ManageCuisineCategory } from "../../Pages/Dashboard/AdminDashboard/EditCategoryCuisine/ManageCuisineCategory";

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

      {
        name: "Add Category/Cuisine",
        path: "add-category-cuisine",
        element: <AddCusineCategory />,
      },
      {
        name: "Edit Category/Cuisine",
        path: "edit-category-cuisine",
        element: <ManageCuisineCategory />,
      },
    ],
  },
  {
    name: "Order Management",
    children: [
      {
        name: "All Orders",
        path: "all-orders",
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
