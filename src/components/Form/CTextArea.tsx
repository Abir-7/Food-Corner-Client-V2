import { Controller, useFormContext } from "react-hook-form";

interface TextAreaProps {
  name: string;
  label: string;
  errorMsg?: string | false;
  labelStyle?: string;
}

const CTextArea = ({ name, label, errorMsg, labelStyle }: TextAreaProps) => {
  const { control } = useFormContext();
  return (
    <div>
      <Controller
        name={name}
        control={control}
        rules={{ required: errorMsg }}
        render={({ field, fieldState: { error } }) => (
          <>
            <div className="form-control">
              <label className="label">
                <span className={`label-text ${labelStyle}`}>{label}</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                {...field}
                value={field.value || ""}
              />
            </div>

            {error && <p className="text-red-500">{error.message}</p>}
          </>
        )}
      />
    </div>
  );
};

export default CTextArea;
