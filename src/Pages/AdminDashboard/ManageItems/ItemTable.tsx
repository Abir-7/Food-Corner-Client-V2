import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import MenuEditForm from "./MenuEditForm";
import { useState } from "react";

const ItemTable = () => {
  const [pId, setPId] = useState<null | string>(null);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-orange-400">
            <th>Menu Item</th>
            <th>Description</th>
            <th>Price & Size</th>
            <th>Available Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td>
              <div className="flex gap-5  items-center   ">
                <img
                  className="w-16 h-16 object-cover rounded-lg"
                  src=""
                  alt=""
                />
                <div>
                  <p className="text-xl font-bold"> Title</p>

                  <div className="flex gap-1">
                    {" "}
                    <span className=" w-[85px]  rounded-full flex items-center justify-center shadow-sm text-sm font-semibold text-white bg-green-400 ">
                      Category
                    </span>
                    <span className=" w-[85px]   rounded-full flex items-center justify-center shadow-sm text-sm font-semibold text-white bg-orange-400 ">
                      Cuisine
                    </span>
                  </div>
                </div>
              </div>
            </td>
            <td className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              debitis quaerat ut? Expedita nam doloremque adipisci accusantium
              ea. Dolorum, dolorem! Impedit dolorem facere vero nesciunt cumque
              exercitationem facilis eveniet dolores?
            </td>
            <td>
              <div className="flex gap-3  font-semibold">
                {" "}
                <span className=" text-nowrap">100 tk</span>{" "}
                <span className="text-green-500">{"/"}</span>
                <span className="text-nowrap ">
                  100 <span>{'"'}</span>
                </span>
              </div>
              <div className="flex gap-3  font-semibold">
                {" "}
                <span className=" text-nowrap">100 tk</span>{" "}
                <span className="text-green-500">{"/"}</span>
                <span className="text-nowrap ">100 </span>
              </div>
              <div className="flex gap-3  font-semibold">
                {" "}
                <span className=" text-nowrap">100 tk</span>{" "}
                <span className="text-green-500">{"/"}</span>
                <span className="text-nowrap ">100 </span>
              </div>
            </td>
            <td className="font-medium">Breakfast</td>
            <td className="font-">
              <div className="flex gap-2">
                {/* This will to open modal */}
                <label
                  onClick={() => setPId("sdasad")}
                  htmlFor="my_modal_6"
                  className="bg-green-500 w-10 h-8 flex justify-center items-center rounded-lg text-white text-lg hover:bg-green-600 duration-300"
                >
                  <FaEdit></FaEdit>
                </label>
                <button className="bg-red-500 w-10 h-8 flex justify-center items-center rounded-lg text-white text-lg hover:bg-red-600 duration-300">
                  <FaTrash />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
        {/* modal */}
        <div>
          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my_modal_6" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div className="modal-box">
              <h3 className="text-lg font-bold text-orange-400">
                Edit Menu Item
              </h3>
              {/* edit form */}
              <MenuEditForm id={pId} setPId={setPId}></MenuEditForm>
              <div className="modal-action">
                <label
                  onClick={() => setPId(null)}
                  htmlFor="my_modal_6"
                  className="btn btn-sm"
                >
                  Close!
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* modal end */}
      </table>
    </div>
  );
};

export default ItemTable;
