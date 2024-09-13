import FoodCard from "./FoodCard";
import SectionHeader from "../../components/common/SectionHeader/SectionHeader";
import { IMenuItem } from "../../interface/menuItem.interface";
import { useGetAllMenuQuery } from "../../Redux/api/menuApi/menuApi";
import LoadingUi from "../../components/common/LoadingUi/LoadingUi";

const FoodItem = () => {
  const { data: menuData, isLoading } = useGetAllMenuQuery("");

  return (
    <>
      <SectionHeader text="Food Menu"></SectionHeader>{" "}
      {!isLoading ? (
        <div className="grid md:grid-cols-2 my-5 gap-4 xl:grid-cols-3 justify-items-center relative">
          {menuData?.map((item: IMenuItem) => (
            <FoodCard key={item._id} item={item}></FoodCard>
          ))}
          {menuData?.length == 0 && (
            <p className="my-5 absolute text-xl font-bold text-orange-400 text-center">
              No Data to Display
            </p>
          )}
        </div>
      ) : (
        <>{<LoadingUi></LoadingUi>}</>
      )}
    </>
  );
};

export default FoodItem;
