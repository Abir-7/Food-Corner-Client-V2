import { Controller, useFormContext } from "react-hook-form";

interface InputProps {
  name: string;
  label: string;
  errorMsg?: string | false;
  type: string;
  labelStyle?: string;
}

const CInput = ({ name, label, errorMsg, type, labelStyle }: InputProps) => {
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
              <input
                className="input  input-sm input-bordered"
                {...field}
                value={field.value || ""}
                type={type}
              />
            </div>

            {error && <p className="text-red-500">{error.message}</p>}
          </>
        )}
      />
    </div>
  );
};

export default CInput;
