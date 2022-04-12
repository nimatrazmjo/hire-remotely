import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

const Overview = ({memory, time}) => {
  const data = [
    {
      name: 'Memory',
      value: memory
    },
    {
      name: 'Time',
      value: time
    }
  ]
  return (
    <div>
      <BarChart
        width={380}
        height={200}
        layout="vertical"
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 50,
          bottom: 0,
        }}
        barSize={20}
      >
        <YAxis type="category" dataKey="name" />
        <XAxis  type="number" />
        
        <Bar dataKey="value" fill="#82ca9d" />
        <CartesianGrid strokeDasharray="3 3" />

      </BarChart>
    </div>
)
};

export default Overview;