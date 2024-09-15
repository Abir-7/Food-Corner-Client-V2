/* eslint-disable @typescript-eslint/no-explicit-any */
import SectionHeader from "../../components/common/SectionHeader/SectionHeader";

import { uploadImageToCloudinary } from "../../utils/uploadImage";

import { useAddMenuMutation } from "../../Redux/api/menuApi/menuApi";
import { IApiResponse } from "../../Redux/interface/global.interface";
import { toast } from "sonner";
import { useState } from "react";
import AddEditForm from "../../components/common/addItemEditItemForm/addEditForm";
import { IAddItemForm } from "../../components/Form/CForm";

const AddItem = () => {
  const [eMsg, setEmsg] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [addItem] = useAddMenuMutation();

  const onFormSubmit = async (data: IAddItemForm) => {
    console.log(data.status.availableQuantity);

    if (
      data.availableFor.Breakfast ||
      data.availableFor.Dinner ||
      data.availableFor.Lunch
    ) {
      if (data?.price?.length == 0 || !data?.price) {
        toast.error("Add product price and size.");
      } else {
        if (data?.photo) {
          console.log("sdsds");
          const uploadedImageUrl = await uploadImageToCloudinary(data.photo);
          // console.log(uploadedImageUrl, "upload");
          if (!uploadedImageUrl) {
            toast.error("Something went wrong. Try again.");
            setEmsg(false);
          } else {
            setEmsg(false);
            const newData = {
              ...data,
              status: data.status.availableQuantity
                ? data.status.availableQuantity
                : "nolimit",
              photo: uploadedImageUrl,
            };
            const res = (await addItem(newData)) as IApiResponse<any>;
            if (res?.data?.success) {
              toast.success("Item added successfully");
            }
          }
        }
      }
    } else {
      setEmsg(true);
    }
    setPreview(null);
  };

  return (
    <div className="w-full">
      <SectionHeader text="Add New Menu "></SectionHeader>
      <div className="container mx-auto px-2 mt-5">
        <AddEditForm
          isRequired={true}
          eMsg={eMsg}
          setPreview={setPreview}
          preview={preview}
          onFormSubmit={onFormSubmit}
        ></AddEditForm>
      </div>
    </div>
  );
};

export default AddItem;
