import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const json = require('../../utils/result.json'); //(with path)

export default function Linechart(){

    return(<>
    <div className='my-10'>
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={json}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis dataKey="age"/>
        <Tooltip />
        <Legend />
        <Line dataKey="age" fill="#8884d8" />
        <Line type="monotone" dataKey="id" fill="#000000" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
    </div>
    </>);
}