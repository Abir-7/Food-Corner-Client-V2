export const CFormButton = ({
  text,
  btnStyle = "",
}: {
  text: string;
  btnStyle?: string;
}) => {
  return (
    <button
      type="submit"
      className={`btn btn-sm  bg-orange-400 hover:bg-orange-500 text-white duration-300 my-4 ${btnStyle}`}
    >
      {text}
    </button>
  );
};
