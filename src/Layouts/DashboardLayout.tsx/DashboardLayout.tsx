import { NavLink, Outlet } from "react-router-dom";
import {
  ISidebarItem,
  sideNavLinkGenerator,
} from "../../utils/sideNavLinkGenerator";
import { userRouteOption } from "../../Routes/userRoute/userRoute";

const DashboardLayout = () => {
  const userRole = {
    ADMIN: "admin",
    FACULTY: "faculty",
    USER: "customer",
  };

  let sideBarItems;

  switch ("customer") {
    case userRole.ADMIN:
      // sideBarItems = sideNavLinkGenerator(adminOption, userRole.ADMIN);
      break;

    case userRole.USER:
      sideBarItems = sideNavLinkGenerator(userRouteOption, userRole.USER);
      break;

    default:
      break;
  }
  console.log(sideBarItems);
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        {/* Page content here */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu bg-orange-400 flex flex-col gap-3 text-base-content min-h-full w-80 p-4">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-slate-100 text-orange-400 font-semibold px-3 py-2 rounded"
                : "px-3 py-2 bg-orange-400 text-white font-semibold border border-white rounded  shadow"
            } // Apply styles based on active state
            to="/"
          >
            Home
          </NavLink>
          {sideBarItems?.map((item: ISidebarItem) => {
            if (item.key && item.label && !item.children) {
              return (
                <NavLink
                  key={item.key}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-slate-100  text-orange-400 font-semibold   px-3 py-2 rounded"
                      : "px-3 py-2 bg-orange-400 text-white font-semibold border border-white rounded  shadow"
                  } // Apply styles based on active state
                  to={item.label}
                >
                  {item.key}
                </NavLink>
              );
            }
            if (item.children) {
              return (
                <details>
                  <summary>{item.key}</summary>
                  <ul className="p-4  md:rounded-md md:absolute flex flex-col md:top-12  md:bg-orange-600 md:bg-opacity-15  gap-3">
                    <li>
                      {item?.children.map((item: ISidebarItem) => {
                        return (
                          <NavLink
                            key={item.key}
                            className={({ isActive }) =>
                              isActive
                                ? "bg-slate-100 text-orange-400 font-semibold  px-3 py-2 rounded"
                                : "px-3 py-2 text-white font-semibold bg-orange-400 border border-white rounded shadow"
                            } // Apply styles based on active state
                            to={item.label}
                          >
                            {item.key}
                          </NavLink>
                        );
                      })}
                    </li>
                  </ul>
                </details>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
