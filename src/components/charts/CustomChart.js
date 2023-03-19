import { useEffect, useState } from "react";
import CommonChart from "../reusable/CommonChart";
import Dropdown from "../reusable/Dropdown";
import RadioButton from "../reusable/RadioButton";
import Search from "../reusable/Search";

let parsedData;

const CustomChart = ({}) => {

  const chartType = {
    bar:
      "Bar Chart",
    line:
      "Line Chart",
  };

  const [inputText, setInputText] = useState("");
  const [radio, setRadio] = useState("Bar Chart");
  const [columnData, setcolumnData] = useState(null);

  const [xAxisValue, setXAxisValue] = useState();
  const [yAxisValue, setYAxisValue] = useState();

  useEffect(() => {
    console.log("Effect Method Called Data:" + columnData);
    console.log("Effect Method Called Radio:" + radio);
  }, [columnData], [radio]);

  const handleChangeInInput = (event) => {
    setInputText(event.target.value);
  };

  function handleClickOfSearchButton() {
    getGoogleSheetDataAsJsonAndSetDropdownState(inputText);
  }

  function handleSelectedRadio(value){
    setRadio(value)
    console.log("PARENT: "+radio)
  }

  async function getGoogleSheetDataAsJsonAndSetDropdownState(spreadsheet_id) {
    let sheetURL = `https://opensheet.elk.sh/${spreadsheet_id}/1`;
    let sheetResponse = await fetch(sheetURL);
    parsedData = await sheetResponse.json();
    console.log(parsedData)
    setcolumnData(Object.keys(parsedData[0]));
  }

  return (
    <div className="container">
      <Search
        handleOnChange={handleChangeInInput}
        handleText={inputText}
        handleClick={() => handleClickOfSearchButton()}
      ></Search>
      <RadioButton onRadioChangeHandler={() => handleSelectedRadio(chartType.bar)} radioText={chartType.bar}></RadioButton>
      <RadioButton onRadioChangeHandler={() => handleSelectedRadio(chartType.line)} radioText={chartType.line}></RadioButton>
      <div className="my-10">
      <CommonChart 
      parsedData={parsedData} 
      xAxisValue={xAxisValue} 
      yAxisValue={yAxisValue}
      selectedChart={radio}
      ></CommonChart>
      </div>
      <Dropdown
        value='X Axis'
        dropdownData={columnData}
        dropDownSelectionHandler={setXAxisValue}
      ></Dropdown>
      <Dropdown
        value='Y Axis'
        dropdownData={columnData}
        dropDownSelectionHandler={setYAxisValue}
      ></Dropdown>
    </div>
  );
};

export default CustomChart;
