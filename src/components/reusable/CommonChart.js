import { useEffect } from "react";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
} from "recharts";

const CommonChart = ({ parsedData, xAxisValue, yAxisValue, selectedChart }) => {

  useEffect(() => {
    console.log('INSIDE COMMON CHART')
    console.log({parsedData})
    console.log({xAxisValue})
    console.log({yAxisValue})
    console.log({selectedChart})
  });

  return (
    <>
      { selectedChart === "Bar Chart" && 
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
      }
      <div className="my-10">
        { selectedChart  === "Line Chart" && 
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
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
              <Line dataKey={yAxisValue} fill="#8884d8" />
              <Line
                type="monotone"
                dataKey={yAxisValue}
                fill="#000000"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        }
        { selectedChart === "Area Chart" && 
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            width={500}
            height={400}
            data={parsedData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xAxisValue} />
            <YAxis />
            <Tooltip />
            <Area dataKey={yAxisValue} type="monotone"  stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      }
      { selectedChart === "Pie Chart" && 
        <ResponsiveContainer width="100%" height="100%">
          <PieChart
            width={500}
            height={400}
          >
            <Pie
            dataKey={yAxisValue}
            startAngle={180}
            endAngle={0}
            data={parsedData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
            />
          </PieChart>
        </ResponsiveContainer>
      }
      </div>
    </>
  );
};

export default CommonChart;
