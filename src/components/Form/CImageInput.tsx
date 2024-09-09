import { Controller, useFormContext } from "react-hook-form";

interface ImageInputProps {
  name: string;
  label: string;
  errorMsg?: string | false;
  setPreview: (srg: string) => void;
  preview: string | null;
}

const CImageInput = ({
  name,
  setPreview,
  label,
  preview,
  errorMsg,
}: ImageInputProps) => {
  const { control, getValues } = useFormContext();
  console.log(getValues(name));
  const handleImageChange = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

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
                <span className="label-text">{label}</span>
              </label>
              <input
                className="file-input file-input-orange file-input-sm w-full file-input-bordered"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    handleImageChange(file);
                    field.onChange(file);
                  }
                }}
              />
              {preview && (
                <div className="mt-2">
                  <img
                    src={preview}
                    alt="Preview"
                    className="h-20 w-20 object-cover rounded-md"
                  />
                </div>
              )}
            </div>
            {error && <p className="text-red-500">{error.message}</p>}
          </>
        )}
      />
    </div>
  );
};

export default CImageInput;
