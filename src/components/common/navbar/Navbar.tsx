import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../../../Redux/hooks";
import { decodeToken } from "../../../utils/decodeToken";
import { JwtPayload } from "jwt-decode";
import { useDispatch } from "react-redux";
import { userLogout } from "../../../Redux/feature/userSlice/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { token } = useAppSelector((state) => state.auth);
  let user;

  if (token) {
    user = decodeToken(token) as JwtPayload & {
      role: string;
      userEmail: string;
    };
  }
  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-orange-400 text-white  px-3 py-1 rounded"
              : "px-3 py-1  relative hover:bg-orange-400 hover:text-white rounded-md duration-300 z-10 text-black"
          } // Apply styles based on active state
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/food-item"
          className={({ isActive }) =>
            isActive
              ? "bg-orange-400 text-white  px-3 py-1 rounded"
              : "px-3 py-1 relative hover:bg-orange-400 hover:text-white rounded-md duration-300 z-10 text-black"
          } // Apply styles based on active state
        >
          Food Item
        </NavLink>
      </li>
      <li>
        {token && (
          <NavLink
            to={`/${user?.role}/dashboard`}
            className={({ isActive }) =>
              isActive
                ? "bg-orange-400 text-white  px-3 py-1 rounded"
                : "px-3 py-1  relative hover:bg-orange-400 hover:text-white rounded-md duration-300 z-10 text-black"
            } // Apply styles based on active state
          >
            Dashboard
          </NavLink>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar  bg-orange-600 bg-opacity-15 font-medium ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className=" flex flex-col gap-3 dropdown-content z-10 bg-orange-50  rounded-box  mt-3 w-52 py-3 px-5 shadow"
          >
            {navLink}
          </ul>
        </div>
        <a className="px-2 font-bold cursor-pointer text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" flex gap-5 relative px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
        {user?.userEmail ? (
          <button
            onClick={() => dispatch(userLogout())}
            className="btn btn-sm text-white bg-orange-400 border-none "
          >
            Logout
          </button>
        ) : (
          <Link
            to="/user-login"
            className="btn btn-sm text-white bg-orange-400 border-none "
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
