import LoadingUi from "../../components/common/LoadingUi/LoadingUi";
import SectionHeader from "../../components/common/SectionHeader/SectionHeader";
import { useGetUserFavMenuQuery } from "../../Redux/api/favMenuApi/favMenuApi";
import { useAppSelector } from "../../Redux/hooks";
import FavCard from "./FavCard";

const FavItems = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { data, isLoading } = useGetUserFavMenuQuery(undefined, {
    skip: !user || user?.role == "admin",
  });
  console.log(data);
  return (
    <div>
      <SectionHeader text="Your Favourite Items"></SectionHeader>
      {isLoading ? (
        <LoadingUi />
      ) : (
        <div className="container mx-auto px-2 my-5">
          {data?.products.map((item) => (
            <FavCard itemData={item} key={item._id}></FavCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavItems;
