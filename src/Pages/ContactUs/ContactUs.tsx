import { FieldValues } from "react-hook-form";
import SectionHeader from "../../components/common/SectionHeader/SectionHeader";
import CForm from "../../components/Form/CForm";
import CInput from "../../components/Form/CInput";
import CTextArea from "../../components/Form/CTextArea";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

export const ContactUs = () => {
  const onFormSubmit = async (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="">
      <SectionHeader text="Contact Us"></SectionHeader>

      <div className="container mx-auto px-5 mt-10 grid md:grid-cols-2 items-center gap-10 md:gap-20 ">
        <div className="w-full">
          <p className="text-3xl font-bold">Get In Touch</p>
          <CForm onFormSubmit={onFormSubmit}>
            <CInput
              label="Email"
              errorMsg="Email is Required"
              name="userEmail"
            ></CInput>
            <CTextArea name="message" label="Message"></CTextArea>
            <button
              type="submit"
              className="btn w-full btn-sm text-white bg-orange-400 my-4 hover:bg-orange-500"
            >
              Send
            </button>
          </CForm>
        </div>
        <div className="space-y-5 md:mx-auto  mb-10">
          <p className="text-3xl font-bold">Contact Info</p>
          <div className="flex items-center  gap-4">
            <MdMessage className="font-semibold text-orange-400 text-lg mt-1"></MdMessage>
            <p>Food_Corner@gmail.com</p>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-xl text-orange-400" />
            <p>
              +880 1234567890 <br /> +8802364786732
            </p>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-xl text-orange-400" />
            <p>
              Dhanmondi-32, Dhaka <br /> Bangladesh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
