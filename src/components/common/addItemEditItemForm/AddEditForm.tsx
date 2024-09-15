import CForm, { IAddItemForm } from "../../Form/CForm";
import CInput from "../../Form/CInput";
import CTextArea from "../../Form/CTextArea";
import CSelect from "../../Form/CSelect";
import CInputArray from "../../Form/CInputArray";
import CInputCheckBox from "../../Form/CInputCheckBox";
import CImageInput from "../../Form/CImageInput";

interface IProps {
  onFormSubmit: (data: IAddItemForm) => Promise<void>;
  setPreview: (srg: string) => void;
  preview: string | null;
  eMsg: boolean;
  isRequired: boolean;
}
const AddEditForm = ({
  isRequired,
  onFormSubmit,
  setPreview,
  preview,
  eMsg,
}: IProps) => {
  const onSubmitForm = async (data: IAddItemForm) => {
    onFormSubmit(data);
  };

  return (
    <CForm onFormSubmit={onSubmitForm}>
      <CInput
        name="title"
        label="Menu Title"
        errorMsg={isRequired ? "Menu title is required" : false}
        type="text"
      ></CInput>
      <CTextArea
        name="description"
        errorMsg={isRequired ? "Menu description is required" : false}
        label="Description"
      ></CTextArea>
      <CSelect
        errorMsg={isRequired ? "Category is required" : false}
        options={[
          { value: "Rice", label: "Rice" },
          { value: "Pizza", label: "Pizza" },
        ]}
        name="category"
        label="Category"
      ></CSelect>

      <CInputArray
        errorMsg={isRequired ? "Price and Size is Requied" : false}
        name="price"
      ></CInputArray>
      <CInput
        name="status.availableQuantity"
        label="Quantity"
        errorMsg={isRequired ? "Menu quantity is required" : false}
        type="number"
      ></CInput>

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
        {eMsg && <p className="text-red-500">Please check at least one.</p>}
      </div>

      <CSelect
        errorMsg={isRequired ? "Cuisine is required" : false}
        options={[
          { value: "Thai", label: "Thai" },
          { value: "Italian", label: "Italian" },
        ]}
        name="cuisine"
        label="Cuisine"
      ></CSelect>
      <CImageInput
        preview={preview}
        setPreview={setPreview}
        errorMsg={isRequired ? "Image is required" : false}
        name="photo"
        label="Image"
      ></CImageInput>
      <button
        className="btn my-4 btn-sm border-none hover:bg-orange-500 w-full text-white bg-orange-400"
        type="submit"
      >
        Update Item
      </button>
    </CForm>
  );
};

export default AddEditForm;
