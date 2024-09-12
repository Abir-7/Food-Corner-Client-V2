import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

const SingleItemCard = () => {
  return (
    <div className="border border-orange-400 rounded-lg flex p-3 gap-5 flex-wrap justify-between items-center relative ">
      <div className=" flex gap-2 items-center ">
        <div className="w-20 h-20 rounded-lg bg-red-500"></div>
        <div>
          <div className="font-bold text-nowrap">Product name</div>
          <div className="font-bold">Category</div>
        </div>
      </div>
      <div className=" sm:text-center ">
        <div className="font-semibold">Size: 8 inch</div>
        <div className="font-semibold">Price: 300 tk</div>
      </div>

      <div className="ms-auto flex relative  flex-col gap-5 md:ms-0">
        <div className=" w-7 right-0 absolute ms-auto h-7 flex justify-center text-sm items-center  text-red-500 bg-white hover:bg-red-500 hover:text-white duration-200 top-[-10px]  border border-red-500 p-1 rounded-full">
          <FaTrash></FaTrash>
        </div>
        <div className="flex gap-2 mt-10">
          <button className="font-semibold w-6 h-6 text-white flex justify-center items-center text-sm rounded-full bg-green-500">
            <FaPlus></FaPlus>
          </button>
          <div className="font-semibold text-center border px-4 rounded-md">
            110
          </div>
          <button className="font-semibold w-6 h-6 text-white flex justify-center items-center text-sm rounded-full bg-red-500">
            <FaMinus></FaMinus>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleItemCard;
