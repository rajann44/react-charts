import { useEffect } from "react";
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

var json = require('../../utils/result.json'); //(with path)



export default function Chart(){

useEffect(()=>{
  console.log(json)
  console.log(json.name)
  json.map(function(element){
    console.log(element.name);
  })
},[]);

  const data = [
    {
      id: 1,
      name: "Anastassia",
      email: "anolot0@topsy.com",
      gender: "Female",
      age: 42,
      phone: 9569440410
    },
    {
      id: 2,
      name: "Matty",
      email: "mgoldes1@reuters.com",
      gender: "Female",
      age: 98,
      phone: 9628922550
    },
    {
      id: 3,
      name: "Antonio",
      email: "afawlo2@geocities.jp",
      gender: "Male",
      age: 54,
      phone: 9609654493
    },
    {
      id: 4,
      name: "Neddie",
      email: "ncumine3@smugmug.com",
      gender: "Male",
      age: 31,
      phone: 9424429154
    },
    {
      id: 5,
      name: "Danit",
      email: "dolifaunt4@wikispaces.com",
      gender: "Female",
      age: 35,
      phone: 9428847328
    },
  ];

    return(<>
    <div className='my-10'>
      
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
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
        <Bar dataKey="age" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
    </div>
    </>);
}