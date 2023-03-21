import React, { useState } from "react";
import Tesseract from "tesseract.js";

const Ocr = ({ img }) => {
  const [result, setResult] = useState(null);
  // img !== null &&
  //   Tesseract.recognize(img, "eng", { logger: (m) => console.log(m) }).then(
  //     ({ data: { text } }) => {
  //       setResult(text);
  //     }
  //   );
  img !== null &&
    Tesseract.recognize(img).then(({ data: { text } }) => {
      setResult(text);
    });
  return <>{result !== null && result}</>;
};

export default Ocr;
