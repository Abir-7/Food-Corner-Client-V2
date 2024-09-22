import SectionHeader from "../../../components/common/SectionHeader/SectionHeader";

const UserDashboard = () => {
  return (
    <div>
      <SectionHeader text="User Dashboard"></SectionHeader>
      <div>
        <div
          className="container my-5
      mx-auto px-2 flex gap-5 justify-center flex-wrap"
        >
          <div className="w-80 h-32  border-2 rounded-lg  border-orange-400 flex justify-center items-center">
            <div className="flex justify-center flex-col gap-1">
              <p className="text-xl  font-bold ">Pending Orders</p>
              <p className="text-red-500 text-center font-bold text-3xl">200</p>
            </div>
          </div>
          <div className="w-80 h-32 border-2 rounded-lg  border-orange-400 flex justify-center items-center">
            <div className="flex justify-center flex-col gap-1">
              <p className="text-xl  font-bold ">All Orders</p>
              <p className="text-green-500 text-center font-bold text-3xl">
                200
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid  md:grid-cols-2">
        <div className="flex flex-col justify-center my-10">
          <p className="text-2xl rounded-3xl pb-2 border-orange-400  text-nowrap mx-auto font-bold px-4 border-b-2">
            Present Order Status
          </p>

          <div className="mx-2 grid border grid-cols-2 mt-10 card shadow p-5  ">
            <div className="text-lg font-semibold flex-col">
              <ul>
                <li>Product Name</li>
                <li>Product Name</li>
              </ul>
            </div>
            <div className="text-center font-bold">
              {" "}
              <p className="text-green-500">Status</p>
              <p className="font-normal ">Status</p>
            </div>
            <div className="  col-span-2 mt-5 font-bold">
              {" "}
              <p className="">Total Paid:</p>
              <p className="font-normal ">{100} tk.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center my-10">
          <p className="text-2xl rounded-3xl  border-orange-400 mx-auto font-bold px-4  border-b-2  pb-2 ">
            Last Order
          </p>

          <div className="mx-2 grid grid-cols-2 mt-10 border card shadow p-5 ">
            <div className="text-lg font-semibold flex-col">
              <p>Product name</p>
              <p>Product name</p>
            </div>
            <div className="text-center font-bold">
              <p className="text-green-500">Status</p>
              <p className="font-normal  ">Status</p>
            </div>
            <div className="  col-span-2 mt-5 font-bold">
              {" "}
              <p className="">Total Paid:</p>
              <p className="font-normal ">{100} tk.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
