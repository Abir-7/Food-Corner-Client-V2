import { Link } from "react-router-dom";
import SectionHeader from "../../../components/common/SectionHeader/SectionHeader";

import LineChart from "./LineChart";
import PieChart from "./PieChart";

const AdminDashboard = () => {
  return (
    <div>
      <SectionHeader text="Admin Dashboard"></SectionHeader>
      <div
        className="container my-5
      mx-auto px-2 flex gap-5 justify-center flex-wrap"
      >
        <div className="w-80 h-32 border-2 rounded-lg  border-orange-400 flex justify-center items-center">
          <div className="flex justify-center flex-col gap-1">
            <Link
              to={"/admin/all-orders"}
              className="text-xl  font-bold text-red-500"
            >
              All Orders
            </Link>
            <p className="text-orange-400 text-center font-bold text-3xl">
              200
            </p>
          </div>
        </div>
        <div className="w-80 h-32 border-2 rounded-lg  border-orange-400 flex justify-center items-center">
          <div className="flex justify-center flex-col gap-1">
            <p className="text-xl  font-bold text-red-500">Pending Orders</p>
            <p className="text-orange-400 text-center font-bold text-3xl">
              200
            </p>
          </div>
        </div>
        <div className="w-80 h-32 border-2 rounded-lg  border-orange-400 flex justify-center items-center">
          <div className="flex justify-center flex-col gap-1">
            {" "}
            <p className="text-xl  font-bold text-green-500">
              Total Delivary
            </p>{" "}
            <p className="text-orange-400 text-center font-bold text-3xl">22</p>{" "}
          </div>
        </div>

        <div className="w-80 h-32 border-2 rounded-lg  border-orange-400 flex justify-center items-center">
          <div className="flex justify-center flex-col gap-1">
            {" "}
            <p className="text-xl  font-bold text-green-500">
              Registered user
            </p>{" "}
            <p className="text-orange-400 text-center font-bold text-3xl">22</p>{" "}
          </div>
        </div>
      </div>
      <div className="mt-20 container mx-auto gap-10 flex justify-center flex-wrap ">
        <div className=" w-64 xs:w-72 sm:w-80">
          <p className="text-xl font-bold text-orange-400 text-center">
            Populer Menu
          </p>
          <p className="text-lg font-semibold text-green-500 text-center">
            Month
          </p>
          <PieChart></PieChart>
        </div>
        <div className="w-full lg:w-[750px] h-64 md:h-96 flex justify-center mb-10">
          <LineChart></LineChart>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
