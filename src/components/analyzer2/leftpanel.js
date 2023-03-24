import { useState } from "react";
import Fileupload from "../funtionality/FileUpload";
import CSV_Parser from "../../utils/csvparser";
import leftcss from "./css/leftpanel.module.css";

export default function LeftPanel() {
  const [columnName, setColumnName] = useState([]);

  const handleFileSelected = async (event) => {
    console.log("File select method " + event);
    let sheetData = await CSV_Parser.toJson(event.target.files[0]);
    console.log(sheetData);
    setColumnName(Object.keys(sheetData[0]));
  };

  function handleDragStart(event) {
    console.log("Drag Start: " + event);
    event.dataTransfer.setData("text", event.target.getAttribute("value"));
    console.log("ID PASSED: " + event.target.getAttribute("value"));
  }

  function handleDrag(event) {
    console.log("On Drag: " + event);
  }

  function handleOnDragEnd(event) {
    console.log("On Drag End: " + event);
  }

  return (
    <div>
      <Fileupload selectedFile={handleFileSelected} title="DATA" />
      <div>
        <ul className={`list-group ${leftcss.columnlist}`}>
          {columnName.map((column, id) => (
            <li
              id={id}
              draggable="true"
              onDrag={handleDrag}
              onDragStart={handleDragStart}
              onDragEnd={handleOnDragEnd}
              className="list-group-item"
              key={column}
              value={column}
            >
              {column}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
