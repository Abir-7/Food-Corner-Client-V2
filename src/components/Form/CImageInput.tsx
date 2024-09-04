import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface ImageInputProps {
  name: string;
  label: string;
  errorMsg?: string | false;
}

const CImageInput = ({ name, label, errorMsg }: ImageInputProps) => {
  const { control } = useFormContext();
  const [preview, setPreview] = useState<string | null>(null);

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
                className="file-input file-input-sm w-full file-input-bordered"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    handleImageChange(file);
                    field.onChange(file); // Pass the selected file to react-hook-form
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
