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

export default function Barchart(){

    return(<>
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
        <XAxis dataKey="gender" />
        <YAxis dataKey="age"/>
        <Tooltip />
        <Legend />
        <Bar dataKey="age" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
    </div>
    </>);
}