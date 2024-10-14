import ReactHelemt from "../../components/common/ReactHelmet/ReactHelemt";
import SectionHeader from "../../components/common/SectionHeader/SectionHeader";
import { useGetCustomerInfoQuery } from "../../Redux/api/customerApi/customerApi";

const UserProfile = () => {
  const { data } = useGetCustomerInfoQuery("");
  console.log(data?.data);
  const user = {
    imageUrl: "https://via.placeholder.com/150",
    name: "John Doe",
    email: "johndoe@example.com",
    mobile: "+1234567890",
    address: "1234 Elm St, Springfield, USA",
  };
  return (
    <div>
      <ReactHelemt title=": User-Profile"></ReactHelemt>
      <SectionHeader text="User Profile"></SectionHeader>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={user.imageUrl}
            alt="User"
            className="rounded-full w-24 h-24 mt-4"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.email}</p>
          <p className="text-sm text-gray-500">{user.mobile}</p>
          <p className="text-sm text-gray-500">{user.address}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
