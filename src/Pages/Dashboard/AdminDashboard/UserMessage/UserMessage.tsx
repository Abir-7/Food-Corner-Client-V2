/* eslint-disable @typescript-eslint/no-explicit-any */
import SectionHeader from "../../../../components/common/SectionHeader/SectionHeader";
import { useGetAllMsgQuery } from "../../../../Redux/api/contactUsApi/contactUsApi";
import ReplyModal from "./ReplyModal";

const UserMessage = () => {
  const { data } = useGetAllMsgQuery("");
  console.log(data);
  return (
    <div>
      <SectionHeader text="User Queries"></SectionHeader>
      {data?.data.length > 0 ? (
        <div className="container mx-auto p-2 shadow-lg my-10 rounded-lg">
          {data?.data?.map((msg: any) => (
            <div key={msg?._id} className="flex justify-between items-center">
              <div>
                <p>
                  <span className="font-bold text-orange-400"> Email:</span>{" "}
                  <span>{msg?.email}</span>
                </p>
                <p>
                  <span className="text-green-500 font-semibold">
                    {" "}
                    Question:
                  </span>{" "}
                  <span>{msg?.message}</span>
                </p>
              </div>
              <div>
                <ReplyModal id={msg?._id}></ReplyModal>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="my-10 text-center text-xl">No User Message</div>
      )}
    </div>
  );
};

export default UserMessage;
