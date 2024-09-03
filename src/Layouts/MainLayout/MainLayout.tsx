import { Outlet } from "react-router-dom";
import Navbar from "../../components/common/navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
