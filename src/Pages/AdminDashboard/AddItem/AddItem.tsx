/* eslint-disable @typescript-eslint/no-explicit-any */
import SectionHeader from "../../../components/common/SectionHeader/SectionHeader";

import { uploadImageToCloudinary } from "../../../utils/uploadImage";

import { useAddMenuMutation } from "../../../Redux/api/menuApi/menuApi";
import { IApiResponse } from "../../../Redux/interface/global.interface";
import { toast } from "sonner";
import { useState } from "react";

import CForm from "../../../components/Form/CForm";

import CInput from "../../../components/Form/CInput";
import CTextArea from "../../../components/Form/CTextArea";
import CSelect from "../../../components/Form/CSelect";
import CInputArray from "../../../components/Form/CInputArray";
import CMultipleCheckBox from "../../../components/Form/CMultipleCheckBox";
import CImageInput from "../../../components/Form/CImageInput";
import CInputObject from "../../../components/Form/CInputObject";
import { IAddItemForm } from "../../../interface/formData.interface";

const AddItem = () => {
  const [isItemLimited, setIsItemLimited] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [addItem] = useAddMenuMutation();

  const onFormSubmit = async (data: IAddItemForm) => {
    const formatdata = {
      ...data,
      price: data.price.map((item) => {
        return { price: Number(item.price), size: item.size };
      }),
      ...(data.limitedStatus?.quantity && {
        limitedStatus: {
          quantity: Number(data.limitedStatus.quantity),
          isLimited: true,
        },
      }),
    };
    console.log(formatdata, "gg");
    if (data?.photo) {
      console.log("sdsds");
      const uploadedImageUrl = await uploadImageToCloudinary(data.photo);
      // console.log(uploadedImageUrl, "upload");
      if (!uploadedImageUrl) {
        toast.error("Something went wrong. Try again.");
      } else {
        const newData = {
          ...formatdata,
          photo: uploadedImageUrl,
        };
        const res = (await addItem(newData)) as IApiResponse<any>;
        if (res?.data?.success) {
          toast.success("Item added successfully");
        }
      }
    }
    setIsItemLimited(false);
    setPreview(null);
  };

  return (
    <div className="w-full">
      <SectionHeader text="Add New Menu "></SectionHeader>
      <div className="container mx-auto px-2 mt-5">
        <CForm onFormSubmit={onFormSubmit}>
          <CInput
            labelStyle="font-semibold"
            label="Title"
            errorMsg="Menu title is required"
            type="text"
            name="title"
            placeholder="Menu Title"
          ></CInput>
          <CTextArea
            labelStyle="font-semibold"
            name="description"
            errorMsg="Description is Required."
            label="Description"
            placeholder="Menu Description"
          ></CTextArea>
          <CSelect
            labelStyle="font-semibold"
            defaultOption="Select Category"
            errorMsg="Category is required."
            name="category"
            options={[
              { label: "Rice", value: "Rice" },
              { label: "Drink", value: "Drink" },
            ]}
            label="Select Category"
          ></CSelect>
          <CSelect
            labelStyle="font-semibold"
            defaultOption="Select Cuisine"
            errorMsg="Cuisine is required."
            name="cuisine"
            options={[
              { label: "Thai", value: "Thai" },
              { label: "Bengali", value: "Bengali" },
            ]}
            label="Select Cuisine"
          ></CSelect>
          <CInputArray
            errorMsg="Price & Size is required"
            labelStyle="font-semibold"
            name="price"
            options={[
              { name: "price", type: "number" },
              { name: "size", type: "text" },
            ]}
          ></CInputArray>
          <div>
            <label className="label">
              <span className={`label-text font-semibold `}>
                {"Available For"}
              </span>
            </label>
            <CMultipleCheckBox
              options={["breakfast", "dinner", "lunch"]}
              name="availableFor"
            ></CMultipleCheckBox>
          </div>
          <CImageInput
            labelStyle="font-semibold"
            errorMsg="Image is Requierd"
            preview={preview}
            setPreview={setPreview}
            name="photo"
            label="Photo"
          ></CImageInput>
          <div className="mt-3 flex items-center gap-2">
            <p>Check the mark if this item limited.</p>
            <input
              checked={isItemLimited}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setIsItemLimited(e.target.checked)
              }
              className="checkbox checkbox-warning checkbox-sm"
              type="checkbox"
            />
          </div>

          {isItemLimited && (
            <CInputObject
              option="quantity"
              labelStyle="font-semibold"
              label="Quantity"
              errorMsg="Quantity is required"
              type="number"
              name="limitedStatus"
              placeholder="Menu Quantity"
            ></CInputObject>
          )}
          <button
            className="btn my-4 btn-sm border-none hover:bg-orange-500 w-full text-white bg-orange-400"
            type="submit"
          >
            Add Item
          </button>
        </CForm>
      </div>
    </div>
  );
};

export default AddItem;