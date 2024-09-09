export const uploadImageToCloudinary = async (file: FileList) => {
  const formData = new FormData();
  formData.append("file", file[0]);
  formData.append("upload_preset", import.meta.env.VITE_PRESET);
  formData.append("cloud_name", import.meta.env.VITE_CLOUDNAME);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${
      import.meta.env.VITE_CLOUDNAME
    }/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();
  return data.secure_url;
};
