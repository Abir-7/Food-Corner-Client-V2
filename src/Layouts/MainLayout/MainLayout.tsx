import { Outlet } from "react-router-dom";
import Navbar from "../../components/common/navbar/Navbar";
import Footer from "../../components/common/footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
