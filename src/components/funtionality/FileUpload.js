import { useEffect } from "react";
import CSV_Parser from "../../utils/csvparser";

export default function Fileupload({ selectedFile, title }) {
  let sheetHeader;

  useEffect(() => {
    console.log("Effect in Fileupload");
  });

  async function handleFileSelectedDontRun(e) {
    const sheetHead = await CSV_Parser.toJson(e.target.files[0]);
    console.log(sheetHead);
    console.log(Object.keys(sheetHead[0]));
    sheetHeader = Object.keys(sheetHead[0]);
    sheetHeader.forEach((element) => {
      console.log(element);
    });
  }

  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="formFile" className="form-label">
          {title}
        </label>
        <input
          className="form-control"
          type="file"
          id="formFile"
          onChange={(e) => selectedFile(e)}
        />
      </div>
    </div>
  );
}
