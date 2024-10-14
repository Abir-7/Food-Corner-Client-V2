import { FieldValues } from "react-hook-form";
import ReactHelemt from "../../components/common/ReactHelmet/ReactHelemt";
import SectionHeader from "../../components/common/SectionHeader/SectionHeader";
import CForm from "../../components/Form/CForm";
import { useGetCustomerInfoQuery } from "../../Redux/api/customerApi/customerApi";
import CInput from "../../components/Form/CInput";

const UserProfile = () => {
  const { data } = useGetCustomerInfoQuery("");
  console.log(data?.data);
  const onFormSubmit = async (data: FieldValues) => {
    console.log(data);
  };
  return (
    <div>
      <ReactHelemt title=": User-Profile"></ReactHelemt>
      <SectionHeader text="User Profile"></SectionHeader>
      <div className="flex justify-center my-5">
        <div className=" flex w-96 md:w-[400px] p-3 justify-around rounded-md items-center  shadow-xl">
          <figure>
            <img
              src={
                data?.data?.photo ||
                "https://png.pngtree.com/png-vector/20190130/ourmid/pngtree-characters-enjoy-food-cartoon-characters-gourmet-hand-painted-character-cuisine-enjoy-png-image_606799.jpg"
              }
              alt="User"
              className="rounded-full w-24 h-24 "
            />
          </figure>
          <div className="  ">
            <h2 className="text-xl">
              <span className="font-bold"> Name:</span>{" "}
              <span className="font-semibold ">
                {" "}
                {data?.data?.name.firstName}
                {""}
                {data?.data?.name?.middleName &&
                  ` ${data?.data?.name?.middleName}`}
                {""}
                {` ${data?.data?.name.lastName}`}
              </span>
            </h2>
            <p className="">
              <span className="font-bold ">Email:</span> {data?.data?.email}
            </p>
            <p className="">
              <span className="font-bold ">Mobile: </span>
              {data?.data?.contactNo}
            </p>
            <p className="">
              <span className="font-bold ">Address: </span>
              {data?.data?.address}
            </p>
          </div>
        </div>
      </div>

      {/* profile update  */}

      <div>
        <div className="text-2xl my-5 font-bold text-orange-400 mx-4 text-center">
          Update Profile
        </div>
        <div>
          <CForm onFormSubmit={onFormSubmit}>
            <CInput name="address" label="Address"></CInput>
          </CForm>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
