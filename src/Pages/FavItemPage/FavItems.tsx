import SectionHeader from "../../components/common/SectionHeader/SectionHeader";
import { useGetAllFavMenuQuery } from "../../Redux/api/favMenuApi/favMenuApi";
import FavCard from "./FavCard";

const FavItems = () => {
  const { data } = useGetAllFavMenuQuery("");
  console.log(data?.products);
  return (
    <div>
      <SectionHeader text="Your Favourite Items"></SectionHeader>
      <div className="container mx-auto px-2 my-5">
        {data?.products.map((item) => (
          <FavCard itemData={item} key={item._id}></FavCard>
        ))}
      </div>
    </div>
  );
};

export default FavItems;
