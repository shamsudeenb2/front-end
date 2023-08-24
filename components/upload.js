"use client";
import React, { useState } from "react";

// const UploadImage = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     setSelectedImage(URL.createObjectURL(file));
//   };

//   return (
//     <div className="flex  mt-3">
//       <input
//         id="imageUpload"
//         type="file"
//         accept="image/*"
//         onChange={handleImageUpload}
//         className="hidden"
//       />
//       {selectedImage ? (
//         <img
//           htmlFor="imageUpload"
//           src={selectedImage}
//           alt="Selected"
//           className="w-20 h-20 rounded-full object-cover"
//         />
//       ) : (
//         <div
//           htmlFor="imageUpload"
//           className="w-20 h-20 bg-gray-200 border-2 border-gray-300 rounded-full"
//         ></div>
//       )}
      {/* <div htmlFor="" className="m-auto ml-5">
        <p>Funmi Tinubu</p>
        <label
          htmlFor=""
          className="mt-4 italic text-sm text-[#3054D3] font-medium"
        >
          Change Photo
        </label>
      </div> */}
//     </div>
//   );
// };

// export default UploadImage;

export default function UploadImage(handleImage, inputValue) {
  // const [image, setImage] = useState({ preview: "", raw: "" });

  // const handleChange = e => {
  //   if (e.target.files.length) {
  //     setImage({
  //       preview: URL.createObjectURL(e.target.files[0]),
  //       raw: e.target.files[0]
  //     });
  //   }
  // };

  // const handleUpload = async e => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("image", image.raw);

  //   await fetch("YOUR_URL", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "multipart/form-data"
  //     },
  //     body: formData
  //   });
  // };

  return (
    <div className="flex justify-center">
      <label htmlFor="upload-button">
        {inputValue.preview ? (
          <img src={inputValue.preview} alt="dummy" width="300" height="300" />
        ) : (
          <div>
             <div
             htmlFor="imageUpload"
             className="w-20 h-20 bg-gray-200 border-2 border-gray-300 rounded-full"
        ></div>
          </div>
        )}
      </label>
      <input
        type="file"
        id="upload-button"
        style={{ display: "none" }}
        onChange={(e)=>handleImage(e)}
      />
      {/* <br />
      <button onClick={handleUpload}>Upload</button> */}
    </div>
  );
}