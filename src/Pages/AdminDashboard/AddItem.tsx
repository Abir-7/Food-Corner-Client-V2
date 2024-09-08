import SectionHeader from "../../components/common/SectionHeader/SectionHeader";
import CForm from "../../components/Form/CForm";
import { FieldValues } from "react-hook-form";
import CInput from "../../components/Form/CInput";
import CTextArea from "../../components/Form/CTextArea";
import CSelect from "../../components/Form/CSelect";
import CInputArray from "../../components/Form/CInputArray";
import CImageInput from "../../components/Form/CImageInput";
//import { uploadImageToCloudinary } from "../../utils/uploadImage";
import CInputCheckBox from "../../components/Form/CInputCheckBox";

const AddItem = () => {
  const onFormSubmit = async (data: FieldValues) => {
    console.log(data);
    if (data?.photo) {
      console.log("sdsds");
      // const uploadedImageUrl = await uploadImageToCloudinary(data.photo);
      // console.log(uploadedImageUrl, "upload");
    }
  };

  return (
    <div className="w-full">
      <SectionHeader text="Add New Menu"></SectionHeader>
      <div className="container mx-auto px-2">
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
            errorMsg="Select Cuisine"
            options={[{ value: "Thai", label: "Thai" }]}
            name="cuisine"
            label="Cuisine"
          ></CSelect>
          <CImageInput name="photo" label="Image"></CImageInput>
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
