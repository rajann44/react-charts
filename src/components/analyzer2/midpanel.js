import { useState } from "react";
import CommonChart from "../reusable/CommonChart";
import leftcss from "./css/leftpanel.module.css";

export default function Midpanel({ showChartData }) {
  const [dropAreaColumnX, setDropAreaColumnX] = useState();
  const [dropAreaColumnY, setDropAreaColumnY] = useState();

  function handleOnDragEnter(e) {
    console.log("ON DRAG ENTER" + e);
  }

  function handleOnDropForX(event) {
    console.log("ON DROP X: " + event);
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    console.log("ATTRIBUTE GOT X: " + data);
    setDropAreaColumnX(data);
  }

  function handleOnDropForY(event) {
    console.log("ON DROP Y: " + event);
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    console.log("ATTRIBUTE GOT Y: " + data);
    setDropAreaColumnY(data);
  }

  function handleOnDragOver(e) {
    e.preventDefault();
    console.log("DRAG OVER " + e);
  }

  return (
    <div className="row">
      <div
        className="col"
        onDragEnter={handleOnDragEnter}
        onDrop={handleOnDropForX}
        onDragOver={handleOnDragOver}
      >
        Select X-Axis
        {dropAreaColumnX !== undefined && (
          <div className={`x-axis ${leftcss.columnlist}`}>
            {dropAreaColumnX}
          </div>
        )}
      </div>
      <div
        className="col"
        onDragEnter={handleOnDragEnter}
        onDrop={handleOnDropForY}
        onDragOver={handleOnDragOver}
      >
        Select Y-Axis
        {dropAreaColumnY !== undefined && (
          <div className={`y-axis ${leftcss.columnlist}`}>
            {dropAreaColumnY}
          </div>
        )}
      </div>
      <CommonChart
        parsedData={showChartData}
        xAxisValue={dropAreaColumnX}
        yAxisValue={dropAreaColumnY}
        selectedChart="Bar Chart"
      ></CommonChart>
    </div>
  );
}
