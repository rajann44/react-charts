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

const json = require('../../utils/result.json'); //(with path)

var columnData = Object.keys(json[0]);

export default function Barchart() {
  useEffect(() => {
    console.log(columnData);
  }, []);

  function onXClickHandler(c){
    setXAxisValue(c);
  }
  function onYClickHandler(c){
    setYAxisValue(c);
  }

  const[xAxisValue, setXAxisValue] = useState();
  const[yAxisValue, setYAxisValue] = useState();

  return (<>
  <div className="d-flex flex-row">
    <div className="dropdown p-2">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        X-Axis
      </button>
      <ul className="dropdown-menu">
            {columnData.map((c)=>{
                    return <li key={c}><a 
                    onClick={() => onXClickHandler(c)}
                    className="dropdown-item">
                    {c}
                    </a></li>
            })}
      </ul>
    </div>
    <div className="dropdown p-2">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Y-Axis
      </button>
      <ul className="dropdown-menu">
            {columnData.map((c)=>{
                    return <li key={c}><a 
                    onClick={() => onYClickHandler(c)}
                    className="dropdown-item">
                    {c}
                    </a></li>
            })}
      </ul>
    </div>
    </div>
    <div className='my-10'>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={json}
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
  </>);
}