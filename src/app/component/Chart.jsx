"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "01 May", value: 4500 },
  { date: "03 May", value: 5600 },
  { date: "06 May", value: 5200 },
  { date: "09 May", value: 7000 },
  { date: "12 May", value: 6500 },
  { date: "18 May", value: 8800 },
  { date: "23 May", value: 7600 },
  { date: "29 May", value: 10500 },
];

const Chart = () => {
  return (
    <div className="w-full max-w-[700px] bg-white rounded-[20px] p-6">
      {/* Header text */}
      <div className="mb-4">
        <p className="text-black text-[17px] font-ibmplex">total investment</p>
        <h2 className="text-black text-[20px] font-ibmplex font-bold">$10,500</h2>
      </div>

      {/* Chart */}
      <div className="w-full h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22c55e" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#22c55e" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={{ stroke: "#000", strokeWidth: 1 }}
              tick={{ fill: "#666", fontSize: 12 }}
            />
            <YAxis
              tickLine={false}
              axisLine={{ stroke: "#000", strokeWidth: 1, strokeDasharray: "3 3" }}

              tickFormatter={(value) => `$${value.toLocaleString()}`}
              tick={{ fill: "#666", fontSize: 12, }}
              width={70}
              
            />
            <Tooltip
              formatter={(value) => [`$${value.toLocaleString()}`, "Value"]}
              contentStyle={{
                borderRadius: "10px",
                border: "1px solid #ccc",
                backgroundColor: "#fff",
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#22c55e"
              fill="url(#greenGradient)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
