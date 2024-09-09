/* eslint-disable @typescript-eslint/no-explicit-any */
import SectionHeader from "../../components/common/SectionHeader/SectionHeader";
import CForm, { IAddItemForm } from "../../components/Form/CForm";

import CInput from "../../components/Form/CInput";
import CTextArea from "../../components/Form/CTextArea";
import CSelect from "../../components/Form/CSelect";
import CInputArray from "../../components/Form/CInputArray";
import CImageInput from "../../components/Form/CImageInput";
import { uploadImageToCloudinary } from "../../utils/uploadImage";
import CInputCheckBox from "../../components/Form/CInputCheckBox";
import { useAddMenuMutation } from "../../Redux/api/menuApi/menuApi";
import { IApiResponse } from "../../Redux/interface/global.interface";
import { toast } from "sonner";
import { useState } from "react";

const AddItem = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const [addItem] = useAddMenuMutation();
  const onFormSubmit = async (data: IAddItemForm) => {
    console.log(data);

    if (data?.price?.length == 0 || !data?.price) {
      toast.error("Add product price and size.");
    } else {
      if (data?.photo) {
        console.log("sdsds");
        const uploadedImageUrl = await uploadImageToCloudinary(data.photo);
        // console.log(uploadedImageUrl, "upload");
        if (!uploadedImageUrl) {
          toast.error("Something went wrong. Try again.");
        } else {
          const newData = { ...data, photo: uploadedImageUrl };
          const res = (await addItem(newData)) as IApiResponse<any>;
          if (res?.data?.success) {
            toast.success("Item added successfully");
            setPreview(null);
          }
        }
      }
    }
  };

  return (
    <div className="w-full">
      <SectionHeader text="Add New Menu "></SectionHeader>
      <div className="container mx-auto px-2 mt-5">
        <CForm onFormSubmit={onFormSubmit}>
          <CInput
            name="title"
            label="Menu Title"
            errorMsg="Menu title is required"
            type="text"
          ></CInput>
          <CTextArea
            name="description"
            errorMsg="Menu description is required"
            label="Description"
          ></CTextArea>
          <CSelect
            errorMsg="Category is required"
            options={[{ value: "Rice", label: "Rice" }]}
            name="category"
            label="Category"
          ></CSelect>

          <CInputArray
            errorMsg="Price and Size is Requied"
            type="number"
            name="price"
          ></CInputArray>
          <CInput
            name="status.availableQuantity"
            label="Quantity"
            errorMsg="Menu quantity is required"
            type="number"
          ></CInput>
          {/*  */}

          <div>
            <label className="label">
              <span className={`label-text `}>{"Available For"}</span>
            </label>
            <div className="grid grid-cols-3 border border-slate-300 px-2 rounded-lg">
              <CInputCheckBox
                availableFor="Breakfast"
                name="availableFor.Breakfast"
                type="checkbox"
              ></CInputCheckBox>
              <CInputCheckBox
                availableFor="Dinner"
                name="availableFor.Dinner"
                type="checkbox"
              ></CInputCheckBox>
              <CInputCheckBox
                availableFor="Lunch"
                name="availableFor.Lunch"
                type="checkbox"
              ></CInputCheckBox>
            </div>
          </div>
          <CSelect
            errorMsg="Cuisine is required"
            options={[{ value: "Thai", label: "Thai" }]}
            name="cuisine"
            label="Cuisine"
          ></CSelect>
          <CImageInput
            preview={preview}
            setPreview={setPreview}
            errorMsg="Image is required"
            name="photo"
            label="Image"
          ></CImageInput>
          <button
            className="btn my-4 btn-sm border-none hover:bg-orange-500 w-full text-white bg-orange-400"
            type="submit"
          >
            Add Product
          </button>
        </CForm>
      </div>
    </div>
  );
};

export default AddItem;
