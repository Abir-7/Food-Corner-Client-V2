import { useFormContext } from "react-hook-form";

const CheckError = () => {
  const { watch, formState } = useFormContext();
  console.log(formState.isSubmitted, "gg");
  const checkboxes = watch([
    "availableFor.Breakfast",
    "availableFor.Dinner",
    "availableFor.Lunch",
  ]);
  const atLeastOneChecked = checkboxes.some(Boolean);
  return (
    <div className="text-red-500">
      {!atLeastOneChecked && formState.isSubmitted
        ? "Please check at leat one"
        : ""}
    </div>
  );
};

export default CheckError;
