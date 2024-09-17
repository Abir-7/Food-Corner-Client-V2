import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import MenuEditForm from "./MenuEditForm";
import { useState } from "react";
import { IMenuItem } from "../../../interface/menuItem.interface";

const ItemTable = ({ menuItems }: { menuItems: IMenuItem[] }) => {
  const [pId, setPId] = useState<null | string>(null);

  const [isNeedToUpdate, setIsNeedToUpdate] = useState({
    photo: false,
    availableTime: false,
    stockStatus: false,
    price: false,
    limitedStatus: false,
  });

  return (
    <div className="overflow-x-auto ">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th className="min-w-96">Description</th>
              <th>Price & Size</th>
              <th>Available Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {menuItems.map((item: IMenuItem) => (
              <tr key={item._id}>
                <td>
                  <div className="flex items-center  gap-3">
                    <div className="avatar ">
                      <div className="mask mask-squircle h-16 w-16">
                        <img src={item.photo} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-nowrap text-xl mb-1">
                        {item.title}
                      </div>
                      <div className="flex gap-2">
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
                <td>{item.description}</td>
                <td>
                  {item.price.map(
                    (list: { price: number; size: string }, i: number) => (
                      <div className="flex gap-3  font-semibold" key={i}>
                        {" "}
                        <span className=" text-nowrap">
                          {list.price} tk
                        </span>{" "}
                        <span className="text-green-500">{"/"}</span>
                        <span className="text-nowrap ">
                          {list.size.includes(":")
                            ? list.size
                            : `${list.size} inch`}
                        </span>
                      </div>
                    )
                  )}
                </td>
                <td className="font-medium">
                  {Object.entries(item.availableFor).map(([key, value]) => (
                    <div key={key} className="text-nowrap">
                      {key}:{" "}
                      {value ? (
                        <span className="text-green-500">Available</span>
                      ) : (
                        <span className="text-red-500">Not Available</span>
                      )}
                    </div>
                  ))}
                </td>
                <td className="font-">
                  <div className="flex gap-2">
                    {/* This will to open modal */}
                    <label
                      onClick={() => setPId(item._id)}
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
            ))}
          </tbody>
        </table>
      </div>
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
            <MenuEditForm
              setIsNeedToUpdate={setIsNeedToUpdate}
              isNeedToUpdate={isNeedToUpdate}
              id={pId}
              setPId={setPId}
            ></MenuEditForm>
            <div className="modal-action">
              <label
                onClick={() => {
                  setPId(null);
                  setIsNeedToUpdate({
                    photo: false,
                    availableTime: false,
                    stockStatus: false,
                    price: false,
                    limitedStatus: false,
                  });
                }}
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
    </div>
  );
};

export default ItemTable;
