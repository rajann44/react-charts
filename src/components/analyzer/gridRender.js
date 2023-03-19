import Linechart from "../funtionality/Linechart";
import ChartType from "./chartType";
import Dimensions from "./dimensions";
import CSV_Parser from "../../utils/csvparser";
import Fileupload from "../funtionality/FileUpload";
import { useEffect, useState } from "react";
import Dropdown from "../reusable/Dropdown";
import CommonChart from "../reusable/CommonChart";

export default function GridRender() {
  let sheetData=null;
  const [columnList, setColumnList] = useState([]);
  const [xAxisValue, setXAxisValue] = useState();
  const [yAxisValue, setYAxisValue] = useState();

  useEffect(() => {
    console.log('Grid Render Effect Sheet Header: '+columnList)
  }, [columnList]);

  //async function handleFileSelected(e) {
  const handleFileSelected = async (e) => {
    console.log("*************************")
    sheetData = await CSV_Parser.toJson(e.target.files[0]);
    console.log(sheetData);
    setColumnList(Object.keys(sheetData[0]));
    console.log("*************************")
  };

  return (
    <div className="container text-center my-5">
      <div className="row">
        <div className="col border-end border-4">
          <Fileupload selectedFile={handleFileSelected} />
          <Dimensions columnValues={columnList} />
        </div>

        <div className="col-8">
          <div className="row">
            <div className="col">
              <Dropdown
                value="X-Axis"
                dropdownData={columnList}
                dropDownSelectionHandler={setXAxisValue}
              ></Dropdown>
            </div>
            <div className="col">
              <Dropdown
                value="Y-Axis"
                dropdownData={columnList}
                dropDownSelectionHandler={setYAxisValue}
              ></Dropdown>
            </div>
          </div>
          <CommonChart
      parsedData={sheetData} 
      xAxisValue={xAxisValue} 
      yAxisValue={yAxisValue}
      selectedChart="Line Chart"
      ></CommonChart>
          <Linechart />
        </div>
        <div className="col border-start border-4">
          <ChartType />
        </div>
      </div>
    </div>
  );
}
