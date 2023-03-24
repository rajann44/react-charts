import ChartType from "./chartType";
import Dimensions from "./dimensions";
import CSV_Parser from "../../utils/csvparser";
import Fileupload from "../funtionality/FileUpload";
import { useEffect, useState } from "react";
import Dropdown from "../reusable/Dropdown";
import CommonChart from "../reusable/CommonChart";

export default function GridRender() {
  const chartType = {
    bar: "Bar Chart",
    line: "Line Chart",
    area: "Area Chart",
    pie: "Pie Chart",
  };

  const chartImage = {
    bar: "-336px -408px",
    line: "-420px -360px",
    area: "-210px -168px",
    pie: "-336px -336px",
  };

  const [columnName, setColumnName] = useState([]);
  const [columnData, setColumnData] = useState([]);

  const [xAxisValue, setXAxisValue] = useState();
  const [yAxisValue, setYAxisValue] = useState();

  const [chart, setChart] = useState();

  useEffect(
    () => {
      console.log("Grid Render Effect Sheet Header: " + columnName);
    },
    [columnName],
    [columnData]
  );

  function chartSelected(value) {
    setChart(value);
    console.log("Selected Chart: " + value);
  }

  //async function handleFileSelected(e) {
  const handleFileSelected = async (e) => {
    console.log("*************************");
    let sheetData = await CSV_Parser.toJson(e.target.files[0]);
    console.log(sheetData);
    setColumnData(sheetData);
    setColumnName(Object.keys(sheetData[0]));
    console.log("*************************");
  };

  return (
    <div className="text-center my-5">
      <div className="row">
        <div className="col border-end border-4">
          <Fileupload
            selectedFile={handleFileSelected}
            title="Select .CSV file"
          />
          <Dimensions columnValues={columnName} />
        </div>

        <div className="col-8">
          <div className="row">
            <div className="col">
              <Dropdown
                value="X-Axis"
                dropdownData={columnName}
                dropDownSelectionHandler={setXAxisValue}
              ></Dropdown>
            </div>
            <div className="col">
              <Dropdown
                value="Y-Axis"
                dropdownData={columnName}
                dropDownSelectionHandler={setYAxisValue}
              ></Dropdown>
            </div>
          </div>
          <CommonChart
            parsedData={columnData}
            xAxisValue={xAxisValue}
            yAxisValue={yAxisValue}
            selectedChart={chart}
          ></CommonChart>
        </div>
        <div className="col border-start border-4">
          <ChartType
            whichChart={chartType.bar}
            whichImage={chartImage.bar}
            chartClick={() => chartSelected(chartType.bar)}
          />
          <ChartType
            whichChart={chartType.line}
            whichImage={chartImage.line}
            chartClick={() => chartSelected(chartType.line)}
          />
          <ChartType
            whichChart={chartType.area}
            whichImage={chartImage.area}
            chartClick={() => chartSelected(chartType.area)}
          />
          <ChartType
            whichChart={chartType.pie}
            whichImage={chartImage.pie}
            chartClick={() => chartSelected(chartType.pie)}
          />
        </div>
      </div>
    </div>
  );
}
