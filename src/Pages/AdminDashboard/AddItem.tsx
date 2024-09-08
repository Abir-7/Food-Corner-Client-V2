import SectionHeader from "../../components/common/SectionHeader/SectionHeader";
import CForm from "../../components/Form/CForm";
import { FieldValues } from "react-hook-form";
import CInput from "../../components/Form/CInput";
import CTextArea from "../../components/Form/CTextArea";
import CSelect from "../../components/Form/CSelect";
import CInputArray from "../../components/Form/CInputArray";
import CImageInput from "../../components/Form/CImageInput";

const AddItem = () => {
  const onFormSubmit = async (data: FieldValues) => {
    console.log(data);
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
          <CSelect
            options={[
              { value: "Breakfast", label: "Breakfast" },
              { value: "Lunch", label: "Lunch" },
              { value: "Dinner", label: "Dinner" },
            ]}
            name="availableFor"
            label="Available Time"
          ></CSelect>
          <CSelect
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
