// components/SleepDurationChart.tsx

"use client";

import React from 'react';
// FIXED: Added 'Legend' to the import list
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// --- Chart Data ---
const sleepDurationData = [
  { name: 'Yes', value: 83 },
  { name: 'No', value: 27 },
];

// --- Modern Colors ---
const COLORS = ['#4CAF50', '#B0BEC5']; // Green for Yes, Grey for No

// --- Custom Tooltip Component ---
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-200 rounded-lg shadow-sm">
        <p className="font-semibold text-gray-700">{`${payload[0].name}: ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

// --- Custom Label for percentages inside slices ---
const renderInnerLabel = (props: any) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props;
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize="14px"
      fontWeight="bold"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


export default function SleepDurationChart() {
  return (
    <div className="w-full max-w-xl mx-auto mt-12">
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        Did you fall asleep within a reasonable time after using the sleep arena?
      </h2>
      <div className="mb-6 text-gray-700">
        <p>
          This graph tracks user feedback on how quickly they were able to fall asleep after
          using a Sleep Arena experience. It reflects the effectiveness of these experiences in
          facilitating a timely transition to sleep.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-bold text-gray-800 text-center mb-4">
          Did you fall asleep ?
        </h3>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={sleepDurationData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderInnerLabel}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              paddingAngle={2}
            >
              {sleepDurationData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend iconSize={10} wrapperStyle={{ fontSize: '12px' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}