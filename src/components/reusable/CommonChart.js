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
} from "recharts";

const CommonChart = ({ parsedData, xAxisValue, yAxisValue, radio }) => {

  return (
    <>
      { radio === "Bar Chart" && 
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
        { radio  === "Line Chart" && 
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
      </div>
    </>
  );
};

export default CommonChart;
