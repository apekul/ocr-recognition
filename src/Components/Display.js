import React, { useState } from "react";
import Ocr from "./Ocr";

const Display = () => {
  const [img, setImg] = useState(null);

  const handleChange = (e) => {
    setImg(e.target.files[0]);
  };

  return (
    <div className="flex text-center gap-10 ">
      <div className="container flex flex-col">
        <div className="bg-red-500 w-96 h-96 flex items-center justify-center">
          {img === null ? (
            "Upload IMG "
          ) : (
            <img src={URL.createObjectURL(img)} alt="imported img" />
          )}
        </div>
        <input type="file" onChange={(e) => handleChange(e)} />
      </div>

      <div className="container flex flex-col ">
        <div className="bg-red-500 w-96 h-96 flex items-center justify-center">
          <Ocr img={img} />
        </div>
      </div>
    </div>
  );
};

export default Display;
