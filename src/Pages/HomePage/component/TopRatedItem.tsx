import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useGetTopRatedMenuQuery } from "../../../Redux/api/menuApi/menuApi";
import { Link } from "react-router-dom";
export const TopRatedItem = () => {
  const { data } = useGetTopRatedMenuQuery("");
  console.log(data);
  return (
    <div className="container mx-auto p-1 mt-10">
      <div className="  ">
        <p className="text-4xl sm:text-5xl font-bold">Shop our Favourites</p>

        <div className="mt-10">
          {data?.map((item) => (
            <div
              key={item._id}
              className="w-72 shadow border h-[450px] pb-2 rounded-xl overflow-hidden group hover:shadow-lg duration-300"
            >
              <div className="w-full h-2/3 relative flex justify-center items-center rounded-xl overflow-hidden">
                <div className="w-full absolute h-1/2  rounded-b-xl bg-orange-400 bg-opacity-90 bottom-0 group-hover:h-full duration-500"></div>

                <div className="w-[200px]  rounded-3xl h-[200px] hover: bg-red-500 relative">
                  <img className="rounded-3xl" src={item.photo} alt="" />
                </div>
              </div>

              {/* Rating and text section */}
              <div className=" p-4">
                <Rating readOnly style={{ maxWidth: 100 }} value={4}></Rating>
                <Link
                  to={`/food-item/${item._id}`}
                  className="text-xl font-semibold hover:text-orange-400 duration-300"
                >
                  {item.title}
                </Link>
                <p>
                  {" "}
                  {item?.description.length > 45
                    ? item.description.slice(0, 45) + "..."
                    : item?.description}
                </p>

                <div className="flex justify-between mt-1">
                  <p className="font-bold text-green-500 ">
                    {item.price[0].price}{" "}
                    <span className="text-orange-400">Tk</span>
                  </p>
                  <p className="font-bold text-green-500 ">
                    {item.price[0].size}{" "}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};