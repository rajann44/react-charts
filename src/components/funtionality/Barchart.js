import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const json = require("../../utils/result.json"); //(with path)

var columnData2 = null;
let parsedData;

export default function Barchart() {
  const [text, setText] = useState("");
  const [columnData, setcolumnData] = useState(null);

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  async function calculateWeather(spreadsheet_id) {
    let sheetURL = `https://opensheet.elk.sh/${spreadsheet_id}/1`;
    let sheetResponse = await fetch(sheetURL);
    parsedData = await sheetResponse.json();
    columnData2 = Object.keys(parsedData[0]);
    setcolumnData(columnData2);
    console.log(columnData);
  }

  function handleOnClick() {
    calculateWeather(text);
  }

  useEffect(() => {
    console.log("EFFECT:" + columnData);
  }, [columnData]);

  function onXClickHandler(c) {
    setXAxisValue(c);
  }
  function onYClickHandler(c) {
    setYAxisValue(c);
  }

  const [xAxisValue, setXAxisValue] = useState();
  const [yAxisValue, setYAxisValue] = useState();

  return (
    <div className="container">
      <div className="input-group w-50 my-3 mx-auto">
        <input
          type="text"
          class="form-control"
          placeholder="Enter Gsheet ID"
          onChange={handleOnChange}
          value={text}
        />
        <button
          className="btn btn-success"
          type="button"
          id="button-addon2"
          onClick={() => handleOnClick()}
        >
          Fetch Now
        </button>
      </div>
      
      <div className="my-10">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={parsedData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xAxisValue} />
            <YAxis dataKey={yAxisValue} />
            <Tooltip />
            <Legend />
            <Bar dataKey={yAxisValue} fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      

      <div className="d-flex flex-row justify-content-center">
        {columnData != null && (
          <div className="dropdown p-2">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              X-Axis
            </button>
            <ul className="dropdown-menu">
              {columnData.map((c) => {
                return (
                  <li key={c}>
                    <a onClick={() => onXClickHandler(c)} className="dropdown-item">
                      {c}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        {columnData != null && (
          <div className="dropdown p-2">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Y-Axis
            </button>
            {columnData != null && (
              <ul className="dropdown-menu">
                {columnData.map((c) => {
                  return (
                    <li key={c}>
                      <a onClick={() => onYClickHandler(c)} className="dropdown-item">
                        {c}
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
