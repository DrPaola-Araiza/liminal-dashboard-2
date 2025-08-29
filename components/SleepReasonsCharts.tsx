// components/SleepReasonsCharts.tsx

"use client";

import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// --- Data for the two pie charts ---
const cantSleepData = [
  { name: 'Jet lag', value: 13.9 },
  { name: 'Shift work', value: 13.9 },
  { name: 'Anxiety', value: 13.9 },
  { name: 'Pain', value: 12.5 },
  { name: 'Coffee / other stimulants', value: 12.5 },
  { name: 'Insomnia', value: 12.5 },
  { name: 'Distractions in environment', value: 12.5 },
  { name: 'Other', value: 12.5 },
];

const preparingToSleepData = [
  { name: 'Fall asleep faster', value: 16.6 },
  { name: 'Improve sleep quality', value: 16.6 },
  { name: 'Relax and unwind', value: 16.6 },
  { name: 'Bedtime routine', value: 16.6 },
  { name: 'Manage sleep disorder', value: 16.6 },
  { name: 'Other', value: 16.6 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF1943', '#19D4FF', '#FF6B19'];

// --- Custom Tooltip Component ---
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-200 rounded-lg shadow-sm">
        <p className="font-semibold text-gray-700">{`${payload[0].name}: ${payload[0].value.toFixed(1)}%`}</p>
      </div>
    );
  }
  return null;
};

// --- FIXED: Corrected label function that properly receives all props ---
const renderInnerLabel = (props: any) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props;
  const RADIAN = Math.PI / 180;
  // Position the label inside the slice
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


// --- Main Component ---
export default function SleepReasonsCharts() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-12">
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        Reasons for Using the Sleep Arena
      </h2>
      <div className="mb-6 text-gray-700">
        <p>
          The following graphs illustrate the primary motivations for users engaging with the Sleep Arena. It categorizes user responses, such as those seeking help falling asleep, managing anxiety, or preparing for rest.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Chart 1: Can't Sleep */}
        <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-bold text-gray-800 text-center mb-4 h-16 flex items-center justify-center">
            Reasons Given by Users Who Selected "Can't Sleep"
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={cantSleepData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderInnerLabel}
                outerRadius={110}
                innerRadius={70}
                fill="#8884d8"
                dataKey="value"
                paddingAngle={2}
              >
                {cantSleepData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend iconSize={10} wrapperStyle={{ fontSize: '12px', wordBreak: 'break-word' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Chart 2: Preparing to Sleep */}
        <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-bold text-gray-800 text-center mb-4 h-16 flex items-center justify-center">
            Reasons Given by Users Who Selected "Preparing to Sleep"
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={preparingToSleepData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderInnerLabel}
                outerRadius={110}
                innerRadius={70}
                fill="#82ca9d"
                dataKey="value"
                paddingAngle={2}
              >
                {preparingToSleepData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[(index + 2) % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend iconSize={10} wrapperStyle={{ fontSize: '12px', wordBreak: 'break-word' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}